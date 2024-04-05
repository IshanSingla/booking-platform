import { PrismaClient } from "@prisma/client";

type FormData = {
   name: string;
   description: string;
   image: string;
};

export const createCategory = async (formData: FormData) => {
   try {
      const prisma = new PrismaClient();
      const createdItem = await prisma.category.create({ data: formData });
      console.log("Category created:", createdItem);
      await prisma.$disconnect(); // Close Prisma client connection
      return createdItem;
   } catch (error) {
      console.log("ERROR:", error);
      throw error; // Rethrow the error for the caller to handle
   }
};
