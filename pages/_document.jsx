import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="icon" href="/favicon.ico" type="image/ico" />

				{/* Meta tags */}
				{/* <meta name="description" content={description} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:site_name" content={siteTitle} />
				<meta property="twitter:card" content="summary" />
				<meta property="twitter:creator" content={config.social.twitter} />
				<meta property="twitter:title" content={title} />
				<meta property="twitter:description" content={description} /> */}
			</Head>

			<body className="bg-blue-50 dark:bg-darkest font-sans antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}