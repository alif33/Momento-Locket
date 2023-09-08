import Collection from "@/components/product/Collection";
import Details from "@/components/product/Details";
import Products from "@/components/product/Products";

export default async function Product({ params }) {

  const res = await fetch('https://momento-locket.vercel.app/api/product/all', {
        cache: 'no-cache'
    })
    const { products } = await res.json();

  // const res = await fetch(`https://momento-locket.vercel.app/api/product?title=${params.title}`, {
  //   cache: 'no-cache'
  // })
  // const { product } = await res.json();
  
  return (
    <div>
        <Details/>
        <Collection products={products} params={params} />
        <Products products={products} params={params} />
    </div>
  )
}
