import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/ico" />

				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="msapplication-starturl" content="/" />
				<meta name="theme-color" content="#27272a" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black" />

				{/* <link rel="manifest" href="/manifest.json" />

				<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120-precomposed.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152-precomposed.png" />
				<link rel="apple-touch-startup-image" href="/splash-screens/splash-screen-640-x-1136.jpg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
				<link rel="apple-touch-startup-image" href="/splash-screens/splash-screen-750-x-1334.jpg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
				<link rel="apple-touch-startup-image" href="/splash-screens/splash-screen-1125-x-2436.jpg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
				<link rel="apple-touch-startup-image" href="/splash-screens/splash-screen-1242-x-2208.jpg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
				<link rel="apple-touch-startup-image" href="/splash-screens/splash-screen-1536-x-2048.jpg" media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)" />
				<link rel="apple-touch-startup-image" href="/splash-screens/splash-screen-1668-x-2224.jpg" media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)" />
				<link rel="apple-touch-startup-image" href="/splash-screens/splash-screen-2048-x-2732.jpg" media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)" /> */}
			</Head>

			<body className="bg-blue-50 dark:bg-darkest font-sans antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}