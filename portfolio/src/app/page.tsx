import { Box, Button, ButtonGroup, Center } from '@chakra-ui/react';
import { Abilities } from './components/Abilities/Abilities';
import Image from 'next/image';
import './Home.css';
export default function Home() {
	return (
		<Box>
			<Box className="HomeBoxContainer">
				<Center className="HomeContainer">
					<h1>Hi I'm Christian Natale</h1>
					<h1>FullStack Developer</h1>
					<ButtonGroup>
						<Button
							variant="outline"
							colorScheme="yellow"
							_hover={{ bg: '#B7791F', color: '#424242' }}
						>
							<a href="mailto:natale.christian.a@gmail.com">Contact me</a>
						</Button>
						<Button
							bg="#B7791F"
							color="#424242"
							borderColor="#B7791F"
							_hover={{
								bg: 'transparent',
								color: '#B7791F',
								border: '1px',
								borderColor: '#B7791F',
							}}
						>
							Download CV
						</Button>
					</ButtonGroup>
				</Center>
				<Image
					src="http://res.cloudinary.com/decjjrdmm/image/upload/v1704761074/portfolio-natadev/dar6ql41bzwqurbxv7cz.jpg"
					alt="Me"
					height={400}
					width={400}
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
