import React from 'react';
import Product from '../cards/Product';
import { producuts } from '../../lib/data';

const Products = () =>{
    return(
        <div id="products" className="bg-cover bg-product">
            <div className="w-10/12 mx-auto py-3">
                <h1 className="text-gradient text-center trajan-font uppercase text-4xl my-3 py-5">Choose your Heavenly Pearl Gates below.</h1>
                <h5 className="text-[#747067] text-lg font-light text-center pb-3">Buy now and get one for yourself and one for your loved one, so you can share and synchronize your photo album together</h5>
                <div className="grid grid-cols-3 gap-3 mb-5 mx-auto">
                    {
                        producuts.map(
                            (item, index)=><Product 
                                key={index}
                                title={item.title} 
                                img={`/img/products/${item.img}`}
                            />)
                    }
                </div>
            </div>
        </div>
        
    )
}
export default Products;