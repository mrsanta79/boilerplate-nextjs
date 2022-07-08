import usePageTitle from '../src/hooks/usePageTitle';
import { getCurrentTheme } from '../src/providers/ThemeProvider';

export default function Home() {
	const pageTitle = usePageTitle('Home');
	const currentTheme = getCurrentTheme();

	return (
		<>
			{pageTitle}

			{/* Body */}
			<div className="flex flex-col justify-center items-center my-20">
				<h1 className="text-2xl text-dark-800 dark:text-dark-200">Hello from NextJS Dashboard</h1>

				<h1 className="text-2xl text-dark-800 dark:text-dark-200">Your current theme is: <span className="uppercase">{currentTheme}</span></h1>
			</div>
		</>
	);
}