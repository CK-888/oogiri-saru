import Head from "next/head";

export default function Layout({children, title = "Default title" }) {
	return (
		<div className="flex justify-center items-center flex-col h-screen md:h-screen text-gray-900 font-mono bg-gray-100 ">
			<Head>
				<title>{title}</title>
			</Head>
			<main className="flex flex-1 justify-center items-center w-full flex-col">
        		{children}
    		</main>
		</div>
		);
}