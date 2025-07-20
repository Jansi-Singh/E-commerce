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

  // Dummy fitness-related categories
  const dummyCategories: CategoryData[] = [
    {
      _id: "cat1",
      categoryName: "Yoga & Pilates",
      categoryDescription:
        "Mats, blocks, and accessories for yoga and pilates.",
      categoryImage:
        "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      categorySlug: "yoga-pilates",
    },
    {
      _id: "cat2",
      categoryName: "Strength Training",
      categoryDescription: "Dumbbells, kettlebells, benches, and more.",
      categoryImage:
        "https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=400&q=80",
      categorySlug: "strength-training",
    },
    {
      _id: "cat3",
      categoryName: "Cardio Equipment",
      categoryDescription: "Jump ropes, treadmills, bikes, and accessories.",
      categoryImage:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      categorySlug: "cardio-equipment",
    },
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
