import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
			</Head>

			{/* Body */}
			<div className="flex flex-row justify-center items-center my-20">
				<h1 className="text-2xl text-dark-800 dark:text-dark-200">Hello from NextJS Dashboard</h1>
			</div>
		</>
	);
}