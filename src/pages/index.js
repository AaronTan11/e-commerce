import { Button } from "@/components/ui/button";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
	return (
		<main className='container mx-auto p-4'>
			<Head>
				<title>E-Commerce</title>
			</Head>
			<h1 className='text-3xl font-bold mb-4'>Welcome to our Store</h1>
			<Link href='/products' className='text-blue-500 hover:underline'>
				<Button>View Products</Button>
			</Link>
		</main>
	);
}
