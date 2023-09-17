import Collection from "@/components/product/Collection";
import Details from "@/components/product/Details";
import Products from "@/components/product/Products";
import Image from "next/image";

export default async function Product({ params }) {

  const res = await fetch('https://momento-locket.vercel.app/api/product/all', {
        cache: 'no-cache'
    })
    const { products } = await res.json();

  return (
    <div>
        <Details products={products} params={params}/>
        <Collection products={products} params={params} />
        <Products products={products} params={params} />
    </div>
  )
}
