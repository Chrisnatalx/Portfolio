import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import './Abilities.css';
export const Abilities = () => {
	return (
		<Box className="AbilitiesContainer">
			<Center>
				<img
					src={`https://skillicons.dev/icons?i=html,css,js,react,redux,nodejs,express,sequelize,postgres,postman,vite,nextjs,git,github,vercel,bootstrap&perline=${20}`}
					alt="icons"
				/>
			</Center>
		</Box>
	);
};
