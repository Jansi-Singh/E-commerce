"use client"


import { get_product_by_category_id } from '@/Services/Admin/product'
import Loading from '@/app/loading'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast , ToastContainer } from 'react-toastify'
import useSWR from 'swr'
import { useParams } from 'next/navigation';
import Image from 'next/image';


type ProductData = {
    productName: string,
    productImage: string,
    productSlug: string,
    productPrice: Number,
    productFeatured: Boolean,
    productCategory : {
        categoryName : string,
        categoryDescription  :string ,
        _id : string,
    },
    _id : string
};
  



export default function CategoryProductPage() {
    const [thisProduct , setThisProdData] =  useState<ProductData[] | []>([]);
    const { data, isLoading } = useSWR('/gettingProductOFSpecificCategoryID', () => get_product_by_category_id(useParams().id))
    if (data?.success !== true) toast.error(data?.message)

    useEffect(() => {
        setThisProdData(data?.data)
    }, [data])

    const CategoryName  =  thisProduct?.map((item) => {
        return item?.productCategory?.categoryName
    })

    // Dummy categories (same as TopCategories)
    const dummyCategories = [
      {
        _id: 'cat1',
        categoryName: 'Yoga & Pilates',
        categoryDescription: 'Mats, blocks, and accessories for yoga and pilates.',
        categoryImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        categorySlug: 'yoga-pilates',
      },
      {
        _id: 'cat2',
        categoryName: 'Strength Training',
        categoryDescription: 'Dumbbells, kettlebells, benches, and more.',
        categoryImage: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        categorySlug: 'strength-training',
      },
      {
        _id: 'cat3',
        categoryName: 'Cardio Equipment',
        categoryDescription: 'Jump ropes, treadmills, bikes, and accessories.',
        categoryImage: 'https://images.unsplash.com/photo-1627483298606-cf54c61779a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        categorySlug: 'cardio-equipment',
      },
    ];

    const params = useParams();
    const { id } = params;

    // Find the category by id
    const category = dummyCategories.find((cat) => cat._id === id) || dummyCategories[0];

    // Dummy products for each category (for demo)
    const dummyProducts = [
      {
        _id: 'prod1',
        productName: 'Yoga Mat',
        productImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        productCategory: 'cat1',
      },
      {
        _id: 'prod2',
        productName: 'Dumbbell Set',
        productImage: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        productCategory: 'cat2',
      },
      {
        _id: 'prod3',
        productName: 'Treadmill',
        productImage: 'https://images.unsplash.com/photo-1627483298606-cf54c61779a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        productCategory: 'cat3',
      },
    ];

    // Filter products for this category
    const products = dummyProducts.filter((prod) => prod.productCategory === category._id);

    return (
        <div className='w-full h-screen dark:text-black bg-gray-50 py-4 px-2 '>
            <div className="text-sm breadcrumbs  border-b-2 border-b-orange-600">
                <ul>
                    <li>
                        <Link href={'/'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        {CategoryName?.[0] || "Loading Category"}
                    </li>
                </ul>
            </div>
            <div className='w-full h-5/6  flex items-start justify-center flex-wrap overflow-auto'>
                {
                    isLoading ? <Loading /> : <>
                         {
                                thisProduct?.map((item: ProductData) => {
                                    return <ProductCard
                                        productName = {item?.productName}
                                        productPrice = {item?.productPrice}
                                        productFeatured = {item?.productFeatured}
                                        productImage = {item?.productImage}
                                        productSlug = {item?.productSlug}
                                        productCategory={item?.productCategory}
                                        _id={item?._id}
                                        key={item?._id} />
                                })
                            }
                    </>
                }
                {
                    isLoading === false && thisProduct ===  undefined || thisProduct?.length <  1 && <p className='text-2xl my-4 text-center font-semibold text-red-400'>No Product Found in this Category</p>
                }
            </div>
            <ToastContainer />
        </div>
    )
}
