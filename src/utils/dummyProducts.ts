// Dummy products for development/demo
export type ProductData = {
  _id: string;
  productName: string;
  productDescription: string;
  productImage: string;
  productSlug: string;
  productPrice: number;
  productQuantity: number;
  productFeatured: boolean;
  productCategory: {
    categoryName: string;
    _id: string;
    categoryDescription: string;
  };
  createdAt: string;
  updatedAt: string;
};

export const dummyProducts = [
  {
    _id: "64b7c2f1e1a2b3c4d5e6f7a1",
    productName: "Yoga Mat",
    productDescription: "High-quality yoga mat for all your stretching and fitness needs.",
    productImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productSlug: "yoga-mat",
    productPrice: 29.99,
    productQuantity: 10,
    productFeatured: true,
    productCategory: {
      categoryName: "Fitness",
      _id: "cat1",
      categoryDescription: "Fitness and exercise equipment."
    },
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    _id: "64b7c2f1e1a2b3c4d5e6f7a2",
    productName: "Dumbbell Set",
    productDescription: "Adjustable dumbbell set for strength training at home.",
    productImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productSlug: "dumbbell-set",
    productPrice: 49.99,
    productQuantity: 15,
    productFeatured: true,
    productCategory: {
      categoryName: "Fitness",
      _id: "cat1",
      categoryDescription: "Fitness and exercise equipment."
    },
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    _id: "64b7c2f1e1a2b3c4d5e6f7a3",
    productName: "Resistance Bands",
    productDescription: "Set of resistance bands for versatile workouts.",
    productImage: "https://images.unsplash.com/photo-1627483298606-cf54c61779a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productSlug: "resistance-bands",
    productPrice: 19.99,
    productQuantity: 20,
    productFeatured: true,
    productCategory: {
      categoryName: "Fitness",
      _id: "cat1",
      categoryDescription: "Fitness and exercise equipment."
    },
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    _id: "64b7c2f1e1a2b3c4d5e6f7a4",
    productName: "Kettlebell",
    productDescription: "Durable kettlebell for strength and conditioning.",
    productImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productSlug: "kettlebell",
    productPrice: 34.99,
    productQuantity: 12,
    productFeatured: true,
    productCategory: {
      categoryName: "Fitness",
      _id: "cat1",
      categoryDescription: "Fitness and exercise equipment."
    },
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    _id: "64b7c2f1e1a2b3c4d5e6f7a5",
    productName: "Foam Roller",
    productDescription: "Foam roller for muscle recovery and massage.",
    productImage: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productSlug: "foam-roller",
    productPrice: 24.99,
    productQuantity: 18,
    productFeatured: true,
    productCategory: {
      categoryName: "Fitness",
      _id: "cat1",
      categoryDescription: "Fitness and exercise equipment."
    },
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    _id: "64b7c2f1e1a2b3c4d5e6f7a6",
    productName: "Jump Rope",
    productDescription: "Speed jump rope for cardio and agility training.",
    productImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productSlug: "jump-rope",
    productPrice: 14.99,
    productQuantity: 25,
    productFeatured: true,
    productCategory: {
      categoryName: "Fitness",
      _id: "cat1",
      categoryDescription: "Fitness and exercise equipment."
    },
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    _id: "64b7c2f1e1a2b3c4d5e6f7a7",
    productName: "Pull-Up Bar",
    productDescription: "Sturdy pull-up bar for upper body workouts.",
    productImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productSlug: "pull-up-bar",
    productPrice: 39.99,
    productQuantity: 8,
    productFeatured: true,
    productCategory: {
      categoryName: "Fitness",
      _id: "cat1",
      categoryDescription: "Fitness and exercise equipment."
    },
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    _id: "64b7c2f1e1a2b3c4d5e6f7a8",
    productName: "Fitness Tracker",
    productDescription: "Wearable fitness tracker for monitoring activity.",
    productImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productSlug: "fitness-tracker",
    productPrice: 59.99,
    productQuantity: 30,
    productFeatured: true,
    productCategory: {
      categoryName: "Fitness",
      _id: "cat1",
      categoryDescription: "Fitness and exercise equipment."
    },
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
  {
    _id: "64b7c2f1e1a2b3c4d5e6f7a9",
    productName: "Gym Bag",
    productDescription: "Spacious gym bag for all your workout essentials.",
    productImage: "https://images.unsplash.com/photo-1627483298606-cf54c61779a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productSlug: "gym-bag",
    productPrice: 27.99,
    productQuantity: 22,
    productFeatured: true,
    productCategory: {
      categoryName: "Fitness",
      _id: "cat1",
      categoryDescription: "Fitness and exercise equipment."
    },
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
  },
]; 