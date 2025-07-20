import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import Link from 'next/link';


type CategoryData = {
    _id: string;
    categoryName: string;
    categoryDescription: string;
    categoryImage: string;
    categorySlug: string;
};



export default function CategoryCard(props: CategoryData) {
  const { _id, categoryImage, categoryName, categoryDescription, categorySlug } = props;
  return (
    <Link href={`/category/category-product/${_id}`} className="block h-full">
      <div className="card card-compact text-black cursor-pointer m-3 w-80 bg-gray-50 shadow-xl relative h-full">
        <div className='w-full rounded relative h-60'>
          <img src={categoryImage} alt={categoryName} className='rounded object-cover w-full h-full' />
        </div>
        <div className="card-body">
          <h2 className="card-title">{categoryName}</h2>
          <p className='text-sm text-gray-600'>{categoryDescription}</p>
        </div>
      </div>
    </Link>
  );
}
