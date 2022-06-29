import { ThemeProvider } from '../src/providers/ThemeProvider';
import '../styles/app.scss';

export default function Application({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
