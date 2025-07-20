import { bookmark_product } from '@/Services/common/bookmark';
import { add_to_cart } from '@/Services/common/cart';
import { RootState } from '@/Store/store';
import { setUserData } from '@/utils/UserDataSlice';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { GrFavorite } from 'react-icons/gr'
import { MdFavorite } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Link from 'next/link';


type ProductData = {
    productName: string,
    productImage: string,
    productSlug: string,
    productPrice: Number,
    productFeatured: Boolean,
    productCategory: {
        categoryName: string,
        categoryDescription: string,
        _id: string,
    },
    _id: string
};


type User = {
    email : string , 
    name : string , 
    _id : string,
}


export default function ProductCard(props: ProductData) {
  const { _id, productImage, productName, productPrice } = props;
  return (
    <Link href={`/product/product-detail/${_id}`} className="block h-full">
      <div className="card text-black cursor-pointer card-compact m-3 w-80 bg-white shadow-xl relative h-full">
        <div className='w-full rounded relative h-60'>
          <Image src={productImage || '/images98.jpg'} alt='no Image' className='rounded' fill />
        </div>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <p className='font-semibold'>{`Rs ${productPrice}`}</p>
        </div>
      </div>
    </Link>
  );
}
