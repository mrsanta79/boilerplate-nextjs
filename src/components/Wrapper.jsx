import Head from 'next/head';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Wrapper({ pageTitle, maxWidth, children, className }) {
    useEffect(() => {
        const pageLoader = document.getElementById('page-loader');

        setTimeout(() => {
            pageLoader && pageLoader.remove()
        }, 500);
    }, []);

    return(
        <>
            <Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME} {pageTitle && `- ${pageTitle}`}</title>
			</Head>

            {/* Page Loader */}
            <div
                id="page-loader"
                className="fixed inset-0 z-50 bg-blue-100 dark:bg-darkest flex flex-row justify-center items-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-loader text-green-600 dark:text-white animation animate-spin w-16 h-16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="12" y1="6" x2="12" y2="3" />
                    <line x1="16.25" y1="7.75" x2="18.4" y2="5.6" />
                    <line x1="18" y1="12" x2="21" y2="12" />
                    <line x1="16.25" y1="16.25" x2="18.4" y2="18.4" />
                    <line x1="12" y1="18" x2="12" y2="21" />
                    <line x1="7.75" y1="16.25" x2="5.6" y2="18.4" />
                    <line x1="6" y1="12" x2="3" y2="12" />
                    <line x1="7.75" y1="7.75" x2="5.6" y2="5.6" />
                </svg>
            </div>

            <div className={`${maxWidth} mx-auto p-4 ${className}`}>
                {children}
            </div>
        </>
    )
}

// Props validations
Wrapper.propTypes = {
    pageTitle: PropTypes.string,
    maxWidth: PropTypes.string,
    className: PropTypes.string,
}
Wrapper.defaultProps = {
    pageTitle: '',
    maxWidth: 'max-w-screen-2xl',
    className: ''
}