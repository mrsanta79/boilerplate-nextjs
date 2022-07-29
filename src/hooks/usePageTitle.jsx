import Head from "next/head";

export default function usePageTitle(title, isSiteNameHidden = false) {
    return (
        <Head>
            <title>
                {
                    !isSiteNameHidden
                    ? process.env.NEXT_PUBLIC_APP_NAME
                    : ''
                }
                {
                    typeof title !== 'undefined' && title.trim() !== ''
                    ? `${(!isSiteNameHidden ? ' | ' : '')} ${title}`
                    : ''
                }
                </title>
        </Head>
    )
}