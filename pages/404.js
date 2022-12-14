import Head from 'next/head';
import Default from '../layouts/Default';

export default function NotFound() {
	return (
		<>
			<Head>
				<title>Page Not Found</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/logo.favicon.png" />
			</Head>
			<Default>
				<p>Page not found.</p>
			</Default>
		</>
	);
}
