import Head from 'next/head';
import { ThemeProvider } from '../src/providers/ThemeProvider';
import '../styles/app.scss';

export default function Application({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
			</Head>

			{/* Body */}
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
