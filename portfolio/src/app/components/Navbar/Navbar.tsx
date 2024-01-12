import { Box, Button, Menu, MenuButton } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import './Navbar.css';
export const Navbar = () => {
	return (
		<Box className="NavbarContainer">
			<Menu>
				<Button variant="link">
					<Link href="/">Home</Link>
				</Button>
				<Button variant="link">
					<Link href="/contact">Contact</Link>
				</Button>
				<Button variant="link">
					<Link href="/projects">Projects</Link>
				</Button>
				<Button variant="link">Dark/Light</Button>
			</Menu>
		</Box>
	);
};
