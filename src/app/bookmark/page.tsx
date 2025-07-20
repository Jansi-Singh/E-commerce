"use client"

import { get_all_bookmark_items } from '@/Services/common/bookmark'
import { RootState } from '@/Store/store'
import FavouriteProductDataTable from '@/components/FavouriteProductDataTable'
import { setNavActive } from '@/utils/AdminNavSlice'
import { setBookmark } from '@/utils/Bookmark'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { MdFavorite } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { dummyProducts, ProductData } from '@/utils/dummyProducts';

interface userData {
    email: String,
    role: String,
    _id: String,
    name: String
}


export default function Page() {
    const Router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.User.userData) as userData | null
    const [loading, setLoading] = useState(true)
    const [bookmarkedProducts, setBookmarkedProducts] = useState<ProductData[]>([]);

    useEffect(() => {
        if (!Cookies.get('token') || user === null) {
            Router.push('/')
        }
        dispatch(setNavActive('Base'))
    }, [dispatch, Router])



    useEffect(() => {
        fetchBookmarkData();
    }, [])

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const bookmarksStr = localStorage.getItem('bookmarks');
        const bookmarks = bookmarksStr ? JSON.parse(bookmarksStr) : [];
        const products = dummyProducts.filter(p => bookmarks.includes(p._id));
        setBookmarkedProducts(products);
      }
    }, []);

    const fetchBookmarkData = async () => {
        if (!user?._id) return Router.push('/')
        const cartData = await get_all_bookmark_items(user?._id)
        if (cartData?.success) {
            dispatch(setBookmark(cartData?.data))
        } else {
            toast.error(cartData?.message)
        }
        setLoading(false)
    }

    return (
        <div className='w-full bg-gray-50 h-screen px-3 py-2'>
            <div className="text-sm breadcrumbs  border-b-2 border-b-orange-600">
                <ul className='dark:text-black'>
                    <li>
                        <Link href={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <MdFavorite className="w-4 h-4 mr-2 stroke-current" />
                        Favourite Products
                    </li>
                </ul>
            </div>
            <div className='w-full h-5/6 py-5'>
                <FavouriteProductDataTable />
            </div>

            <ToastContainer />
        </div>
    )
}
