"use client"

import React from 'react'
import ProductCard from './ProductCard'
import {  useSelector } from 'react-redux'

import { RootState } from '@/Store/store'
import Loading from '@/app/loading'
import { dummyProducts } from '@/utils/dummyProducts';


type ProductData = {
    productName: string,
    productImage: string,
    productSlug: string,
    productPrice: Number,
    productFeatured: Boolean,
    productCategory : {
        categoryName  : string ,
        _id : string
        categoryDescription : string ,
    }
    _id : string
};
  



export default function FeaturedProduct() {
    
    console.log("prodData:", useSelector((state: RootState) => state.Admin.product));
    console.log("prodLoading:", useSelector((state: RootState) => state.Admin.productLoading));
    // We'll log the filtered values after they're computed below

    const prodDataFromStore = useSelector((state: RootState) => state.Admin.product);
    const prodLoading = useSelector((state: RootState) => state.Admin.productLoading);
    // Use dummy data if prodDataFromStore is empty or undefined
    const prodData = 
    // (prodDataFromStore && Array.isArray(prodDataFromStore) && prodDataFromStore.length > 0) ? prodDataFromStore : 
    dummyProducts;

    const FeaturedProducts = prodData?.filter((prod : ProductData) => prod?.productFeatured);
    const filteredProducts  =  FeaturedProducts?.slice(0, 9);

    console.log("FeaturedProducts:", FeaturedProducts);
    console.log("filteredProducts:", filteredProducts);
  
    return (
        <div className='w-full bg-gray-50 text-black  flex items-center flex-col justify-start'>
            <div className='flex items-center justify-center px-2 py-2 mb-2'>
                <h1 className='py-2 px-4 border-x-2 border-x-orange-500 font-semibold text-2xl '>Top Products</h1>
            </div>
            <div className='md:w-4/5 w-full px-1 h-full min-h-96 py-2 md:px-4 flex items-center justify-center flex-wrap'>
            {
                    prodLoading ? <Loading /> :
                        <>
                            {
                                filteredProducts?.length <  1 ? 
                                <h1 className='text-2xl font-semibold text-gray-500'>No Featured Products</h1> 
                                :
                                filteredProducts?.map((item: ProductData) => {
                                    return <ProductCard
                                        productName = {item?.productName}
                                        productPrice = {item?.productPrice}
                                        productFeatured = {item?.productFeatured}
                                        productImage = {item?.productImage}
                                        productCategory={item?.productCategory}
                                        productSlug = {item?.productSlug}
                                        _id={item?._id}
                                        key={item?._id} />
                                })
                            }
                        </>
                }

            </div>
        </div>
    )
}
