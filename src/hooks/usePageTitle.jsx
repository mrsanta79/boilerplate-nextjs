import Head from "next/head";

export default function usePageTitle(title) {
    return (
        <Head>
            <title>{`${process.env.NEXT_PUBLIC_APP_NAME} ${typeof title !== 'undefined' ? ' - ' + title : ''}`}</title>
        </Head>
    )
}
