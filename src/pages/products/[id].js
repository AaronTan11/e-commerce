import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

export default function ProductPage() {
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	const { id } = router.query;

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

	useEffect(() => {
		if (id) {
			fetchSingleProduct();
		}
	}, [id]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<main className='container'>
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
