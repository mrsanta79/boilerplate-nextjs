import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="icon" href="/favicon.ico" type="image/ico" />
			</Head>

			<body className="bg-blue-50 dark:bg-darkest font-sans antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}