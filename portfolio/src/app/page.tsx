import { Box, ButtonGroup, Center, IconButton, Text } from '@chakra-ui/react';
import './Home.css';
import { Abilities } from './components/Abilities/Abilities';
import Image from 'next/image';
export default function Home() {
	return (
		<Box>
			<Box className="HomeBoxContainer">
				<Center className="HomeContainer">
					<h1>Hi I'm Christian Natale</h1>
					<h1>FullStack Developer</h1>
				</Center>
				<Image
					src="http://res.cloudinary.com/decjjrdmm/image/upload/v1704761074/portfolio-natadev/dar6ql41bzwqurbxv7cz.jpg"
					alt="Me"
					height={500}
					width={500}
					className="ImageHome"
				/>
			</Box>
			<Center className="AbilitiesContainer">
				<h1 className="description">
					I am a technology enthusiast with a strong passion for programming,
					particularly on the frontend. Currently, I am dedicated to learning
					TypeScript to enhance my skills and stay at the forefront of
					technological advancements.
				</h1>
				<h1>My Skills</h1>
				<Abilities />
			</Center>
		</Box>
	);
}