import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from './components/Navbar/Navbar';
import { Providers } from './providers';
import { Karla } from 'next/font/google';
const karla = Karla({ subsets: ['latin'], weight: '300' });

export const metadata: Metadata = {
	title: 'NataDev',
	description: 'Christian Natale fullStack developer portfolio',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${karla.className} antialiased`}>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
