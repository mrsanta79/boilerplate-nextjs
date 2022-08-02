import { useEffect, useState } from 'react';
import usePageTitle from '@hooks/usePageTitle';
import { getCurrentTheme } from '@providers/ThemeProvider';
import Metadata from '@comps/Metadata';

export default function Home() {
	const pageTitle = usePageTitle('Home');
	const [currentTheme, setCurrentTheme] = useState('dark');

	useEffect(() =>{
		if(typeof window !== 'undefined') {
			setCurrentTheme(getCurrentTheme());
		}
	}, []);

	return (
		<>
			{pageTitle}

			{/* Metatags */}
			<Metadata title='NextJS Dashboard' />

			{/* Body */}
			<div className="flex flex-col justify-center items-center my-20">
				<h1 className="text-2xl text-dark-800 dark:text-dark-200">Hello from NextJS Dashboard</h1>

				<h1 className="text-2xl text-dark-800 dark:text-dark-200">Your current theme is: <span className="uppercase">{currentTheme}</span></h1>
			</div>

			<input type="file" className="input-box" />
		</>
	);
}