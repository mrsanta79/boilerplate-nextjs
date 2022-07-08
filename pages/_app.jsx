import Head from 'next/head';
import { ThemeProvider } from '../src/providers/ThemeProvider';
import '../styles/app.scss';

export default function Application({ Component, pageProps }) {
	return (
		<>
			{/* Body */}
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
