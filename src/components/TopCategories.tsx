"use client";

import { RootState } from "@/Store/store";
import React from "react";
import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import Loading from "@/app/loading";

type CategoryData = {
  _id: string;
  categoryName: string;
  categoryDescription: string;
  categoryImage: string;
  categorySlug: string;
};

export default function TopCategories() {
  const catDataFromStore = useSelector(
    (state: RootState) => state.Admin.category
  );
  const catLoading = useSelector((state: RootState) => state.Admin.catLoading);

  // Dummy fitness-related categories with provided Unsplash images
  const dummyCategories: CategoryData[] = [
    {
      _id: "cat1",
      categoryName: "Yoga & Pilates",
      categoryDescription: "Mats, blocks, and accessories for yoga and pilates.",
      categoryImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      categorySlug: "yoga-pilates"
    },
    {
      _id: "cat2",
      categoryName: "Strength Training",
      categoryDescription: "Dumbbells, kettlebells, benches, and more.",
      categoryImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      categorySlug: "strength-training"
    },
    {
      _id: "cat3",
      categoryName: "Cardio Equipment",
      categoryDescription: "Jump ropes, treadmills, bikes, and accessories.",
      categoryImage: "https://images.unsplash.com/photo-1627483298606-cf54c61779a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      categorySlug: "cardio-equipment"
    }
  ];

  // Use dummy data if catDataFromStore is empty or undefined
  const catData =
    // (catDataFromStore && Array.isArray(catDataFromStore) && catDataFromStore.length > 0) ? catDataFromStore :
    dummyCategories;

  const filteredCategories = catData?.slice(0, 3);

  return (
    <div
      id="my-Categories"
      className="w-full bg-gray-50  flex items-center flex-col justify-start"
    >
      <div className="flex items-center justify-center px-2 py-2 mb-2">
        <h1 className="py-2 px-4 border-x-2 border-x-orange-500 text-black font-semibold text-2xl ">
          Top Categories
        </h1>
      </div>
      <div className="md:w-4/5 w-full min-h-16  px-1  py-2 md:px-4 flex items-center justify-center flex-wrap">
        {catLoading ? (
          <div className="w-full h-96">
            <Loading />{" "}
          </div>
        ) : (
          <>
            {filteredCategories?.length < 1 ? (
              <h1 className="text-2xl font-semibold text-gray-500">
                No Categories
              </h1>
            ) : (
              filteredCategories?.map((item: CategoryData) => {
                return (
                  <CategoryCard
                    categoryName={item?.categoryName}
                    categoryDescription={item?.categoryDescription}
                    categoryImage={item?.categoryImage}
                    categorySlug={item?.categorySlug}
                    _id={item?._id}
                    key={item?._id}
                  />
                );
              })
            )}
          </>
        )}
      </div>
    </div>
  );
}
