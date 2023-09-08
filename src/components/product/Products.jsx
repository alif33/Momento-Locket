import React from 'react';
import Product from '../cards/Product';

const Products = ({ products, params: { title } }) =>{
    
    return(
        <div className="w-10/12 mx-auto py-5">
            <h1 className="text-center trajan-font uppercase text-2xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-clip-text text-transparent my-10 py-5">You May Also Like</h1>
            <div className="grid grid-cols-3 gap-12 justify-items-center">
                {
                    products?.map((item, index)=>{
                        if(item.title !== title ){
                            return  <Product
                                key={index}
                                _id={item._id}
                                link={`/product/${item.title}`}
                                title={item.title}
                                price={item.price}
                                img={`/img/products/${item.image}`}
                            />
                        }
                    })
                }

            </div>
        </div>
    )
}
export default Products;