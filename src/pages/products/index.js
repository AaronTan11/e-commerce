import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProductsPage() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchAllProducts = async () => {
		try {
			const res = await fetch("https://fakestoreapi.com/products");
			const data = await res.json();

			if (data) {
				setProducts(data);
				setLoading(false);
			}
		} catch (error) {
			console.error("Error fetching products:", error);
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchAllProducts();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-3xl font-bold mb-4'>Products</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{products.map((product) => (
					<Link href={`/products/${product.id}`} key={product.id}>
						<div className='border p-4 rounded hover:shadow-lg'>
							<img
								src={product.image}
								alt={product.title}
								className='w-full h-48 object-contain mb-2'
							/>
							<h2 className='text-lg font-semibold'>{product.title}</h2>
							<p className='text-gray-600'>Price: ${product.price}</p>
							<p className='text-gray-600'>
								Rating: {product.rating.rate} ({product.rating.count} reviews)
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
