import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlobalAdminLayout } from "@/layout/GlobalAdminLayout";
import { NextPageWithLayout } from "@/types/global";
import { FormEvent } from "react";
import axios from "axios";

const Page: NextPageWithLayout = () => {

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let form: any = e.target;
      const formData = { name: form?.name?.value, description: form?.description.value, image: form?.image.value };
      try {
         const data = await axios.post("/api/admin/categories", formData);
         if (data.status === 201) {
            alert("Category created successfully");
         } else {
            alert("An error occurred");
         };
      } catch (error: any) {
         alert(error.message);
      }

   };
   return (
      <form
         onSubmit={handleSubmit}
         className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 justify-center items-center"
      >
         <h1>Create Category</h1>
         <div className="w-full md:w-1/3">
            <label
               className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
               htmlFor="name"
            >
               Category Name
            </label>
            <Input
               className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
               type="text"
               placeholder="Enter category name"
               id="name"
               required={true}
            />
            <p className="mt-1 text-xs text-gray-500">
               *This field is required
            </p>
         </div>
         <div className="w-full md:w-1/3">
            <label
               className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
               htmlFor="description"
            >
               Description
            </label>
            <Input
               className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
               type="text"
               placeholder="Enter description"
               id="description"
            />
         </div>
         <div className="w-full md:w-1/3">
            <label
               className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
               htmlFor="description"
            >
               Image URL
            </label>
            <Input
               className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
               type="text"
               placeholder="Enter image URL"
               id="image"
            />
         </div>
         <div className="w-full md:w-1/3 text-center">
            <Button
               type="submit"
               className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
               Create Category
            </Button>
         </div>
      </form>
   );
};

Page.getLayout = GlobalAdminLayout;

export default Page;
