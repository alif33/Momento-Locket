import React from 'react';
import Product from '../cards/Product';

const Products = () =>{
    return(
        <div className="w-10/12 mx-auto py-5">
            <h1 className="text-center trajan-font uppercase text-2xl bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-clip-text text-transparent my-10 py-5">Reviews</h1>
            <div className="grid grid-cols-3 gap-12">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}
export default Products;