import { useEffect, useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { ThemeProvider } from '@providers/ThemeProvider';
import '/styles/app.scss';
import Loader from '@comps/Loader';
import Head from 'next/head';

// NProgress config
NProgress.configure({
	showSpinner: false,
});

// Loading state
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function Application({ Component, pageProps }) {
	const [isPageLoading, setPageLoadingStatus] = useState(true);

	useEffect(() => {
        setTimeout(() => {
            setPageLoadingStatus(false);
        }, 500);

		// Register serviceWorker
		if("serviceWorker" in navigator) {
			window.addEventListener("load", function () {
				navigator.serviceWorker.register("/service-worker.js").then(
					function (registration) {
						console.log("Service Worker registered");
					},
					function (err) {
						console.log("Service Worker registration failed");
					}
				);
			});
		}
    }, []);

	return (
		<>
			{/* Heads */}
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			</Head>

			{/* Body */}
			<ThemeProvider>

				{/* Page Loader */}
				{
					isPageLoading
					? <div className="fixed inset-0 z-50 bg-darkest transition flex flex-row justify-center items-center">
						<Loader size="w-6 h-6" />
					</div>
					: null
				}

				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
