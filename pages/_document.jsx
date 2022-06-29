import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
			</Head>

			<body className="bg-blue-50 dark:bg-darkest font-sans antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}