import { Box, Button, Menu } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import './Navbar.css';
export const Navbar = () => {
	return (
		<Box className="NavbarContainer">
			<Menu>
				<Button
					variant="link"
					color="#B7791F"
					className="buttonNav"
					_hover={{ color: '#D69E2E', transform: 'scale(1.10)' }}
					size="lg"
				>
					<Link href="/">Home</Link>
				</Button>
				<Button
					className="buttonNav"
					variant="link"
					color="#B7791F"
					_hover={{ color: '#D69E2E', transform: 'scale(1.10)' }}
					size="lg"
				>
					<Link href="/contact">Contact</Link>
				</Button>
				<Button
					className="buttonNav"
					variant="link"
					color="#B7791F"
					_hover={{ color: '#D69E2E', transform: 'scale(1.10)' }}
					size="lg"
				>
					<Link href="/projects">Projects</Link>
				</Button>
				<Button
					className="buttonNav"
					variant="link"
					color="#B7791F"
					_hover={{ color: '#D69E2E', transform: 'scale(1.10)' }}
					size="lg"
				>
					Dark/Light
				</Button>
			</Menu>
		</Box>
	);
};
