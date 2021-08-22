import Head from "next/head";

export default function Layout({children, title = "Default title" }) {
	return (
		<div className="flex justify-center items-center flex-col h-screen text-white font-mono bg-gray-100">
			<Head>
				<title>{title}</title>
			</Head>
			<main className="flex flex-1 justify-center items-center w-auto flex-col">
        		{children}
     		</main>
		</div>
		);
}