import { useEffect, useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { ThemeProvider } from '@providers/ThemeProvider';
import '/styles/app.scss';
import Loader from '@comps/Loader';

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
    }, []);

	return (
		<>
			{/* Body */}
			<ThemeProvider>

				{/* Page Loader */}
				{
					isPageLoading
					? <div className="fixed inset-0 z-50 bg-blue-100 dark:bg-darkest transition flex flex-row justify-center items-center">
						<Loader size="w-6 h-6" />
					</div>
					: null
				}

				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
