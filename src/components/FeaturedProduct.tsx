"use client"

import React from 'react'
import ProductCard from './ProductCard'
import {  useSelector } from 'react-redux'

import { RootState } from '@/Store/store'
import Loading from '@/app/loading'



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

    // const prodDataFromStore = useSelector((state: RootState) => state.Admin.product);
    const prodLoading = useSelector((state: RootState) => state.Admin.productLoading);

    // Dummy featured product data for testing (fitness-related)
    const dummyProducts: ProductData[] = [
        {
            productName: "Yoga Mat",
            productImage: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
            productSlug: "yoga-mat",
            productPrice: 29.99,
            productFeatured: true,
            productCategory: {
                categoryName: "Fitness",
                _id: "cat1",
                categoryDescription: "Fitness and exercise equipment."
            },
            _id: "fit1"
        },
        {
            productName: "Dumbbell Set",
            productImage: "https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=400&q=80",
            productSlug: "dumbbell-set",
            productPrice: 49.99,
            productFeatured: true,
            productCategory: {
                categoryName: "Fitness",
                _id: "cat1",
                categoryDescription: "Fitness and exercise equipment."
            },
            _id: "fit2"
        },
        {
            productName: "Resistance Bands",
            productImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            productSlug: "resistance-bands",
            productPrice: 19.99,
            productFeatured: true,
            productCategory: {
                categoryName: "Fitness",
                _id: "cat1",
                categoryDescription: "Fitness and exercise equipment."
            },
            _id: "fit3"
        },
        {
            productName: "Kettlebell",
            productImage: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
            productSlug: "kettlebell",
            productPrice: 34.99,
            productFeatured: true,
            productCategory: {
                categoryName: "Fitness",
                _id: "cat1",
                categoryDescription: "Fitness and exercise equipment."
            },
            _id: "fit4"
        },
        {
            productName: "Foam Roller",
            productImage: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
            productSlug: "foam-roller",
            productPrice: 24.99,
            productFeatured: true,
            productCategory: {
                categoryName: "Fitness",
                _id: "cat1",
                categoryDescription: "Fitness and exercise equipment."
            },
            _id: "fit5"
        },
        {
            productName: "Jump Rope",
            productImage: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
            productSlug: "jump-rope",
            productPrice: 14.99,
            productFeatured: true,
            productCategory: {
                categoryName: "Fitness",
                _id: "cat1",
                categoryDescription: "Fitness and exercise equipment."
            },
            _id: "fit6"
        },
        {
            productName: "Pull-Up Bar",
            productImage: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80",
            productSlug: "pull-up-bar",
            productPrice: 39.99,
            productFeatured: true,
            productCategory: {
                categoryName: "Fitness",
                _id: "cat1",
                categoryDescription: "Fitness and exercise equipment."
            },
            _id: "fit7"
        },
        {
            productName: "Fitness Tracker",
            productImage: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
            productSlug: "fitness-tracker",
            productPrice: 59.99,
            productFeatured: true,
            productCategory: {
                categoryName: "Fitness",
                _id: "cat1",
                categoryDescription: "Fitness and exercise equipment."
            },
            _id: "fit8"
        },
        {
            productName: "Gym Bag",
            productImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
            productSlug: "gym-bag",
            productPrice: 27.99,
            productFeatured: true,
            productCategory: {
                categoryName: "Fitness",
                _id: "cat1",
                categoryDescription: "Fitness and exercise equipment."
            },
            _id: "fit9"
        }
    ];

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
