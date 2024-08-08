import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Head from "next/head";

export default function ProductPage() {
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	const { id } = router.query; // Get the product ID from the URL

	// Function to fetch a single product by ID
	const fetchSingleProduct = async () => {
		try {
			const res = await fetch(`https://fakestoreapi.com/products/${id}`);
			const data = await res.json();
			if (data) {
				setProduct(data);
				setLoading(false);
			}
		} catch (error) {
			console.error("Error fetching product:", error);
			setLoading(false);
		}
	};

	// Fetch the product when the component mounts
	useEffect(() => {
		if (id) {
			fetchSingleProduct();
		}
	}, [id]);

	// Some Loading and Error Handling states
	if (loading) {
		return <div>Loading...</div>;
	}

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<main className='container'>
			<Head>
				<title>E-Commerce | {product.title}</title>
			</Head>
			<div className='mx-auto max-w-xl pt-10 '>
				<h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
				<p className='text-gray-600 mb-4'>{product.description}</p>
				<img src={product.image} alt={product.category} className='h-96' />
			</div>
			<div className='mt-10 mx-auto max-w-xl pt-10'>
				<Link href='/products' className='mt-20'>
					<Button>
						<MoveLeft color='white' /> <span className='pl-3'>Back to Products Page</span>
					</Button>
				</Link>
			</div>
		</main>
	);
}
