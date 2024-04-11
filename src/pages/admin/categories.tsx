import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
   TableHead,
   TableRow,
   TableHeader,
   TableCell,
   TableBody,
   Table,
} from "@/components/ui/table";
import { GlobalAdminLayout } from "@/layout/GlobalAdminLayout";
import { NextPageWithLayout } from "@/types/props";
import { AdminCategoryProps } from "@/types/responseTypes";
import axios from "axios";
import { FileEditIcon } from "lucide-react";
import React from "react";

const Page: NextPageWithLayout = () => {
   const [data, setData] = React.useState<AdminCategoryProps>([]);
   const [loading, setLoading] = React.useState(true);

   React.useEffect(() => {
      setLoading(true);
      axios
         .get("/api/admin/categories")
         .then((res) => {
            setLoading(false);
            setData(res.data);
         })
         .catch((err) => {
            setLoading(false);
            console.error(err);
         });
   }, []);
   if (loading) return <Skeleton className="w-full h-full rounded-full" />;
   return (
      <main className="flex flex-1 flex-col p-4 md:p-10 gap-3">
         <div className="w-full  text-center flex flex-row gap-3 ">
            <Input placeholder="Search Category" className="w-full" />
            <Button className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
               Create Category
            </Button>
         </div>
         <div className="rounded-lg border">
            <Table className="border text-center">
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-[100px] text-center">SNo</TableHead>
                     <TableHead className="text-center">Name</TableHead>
                     <TableHead className="text-center">Description</TableHead>
                     <TableHead className="text-center">
                        CreatedAt / UpdateAt
                     </TableHead>
                     <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {data?.map((admin: any, index: number) => (
                     <TableRow key={index}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell className="font-medium">{admin.name}</TableCell>
                        <TableCell className="font-medium">
                           {admin.description}
                        </TableCell>
                        <TableCell>
                           <div className="">
                              <div className="text-sm">
                                 {new Date(admin?.createdAt)?.toLocaleDateString() ?? ""}{" "}
                                 {new Date(admin?.createdAt)?.toLocaleTimeString() ?? ""}
                              </div>
                              <div className="text-xs">
                                 {new Date(admin?.updatedAt)?.toLocaleDateString() ?? ""}{" "}
                                 {new Date(admin?.updatedAt)?.toLocaleTimeString() ?? ""}
                              </div>
                           </div>
                        </TableCell>
                        <TableCell className="">
                           <Button size="icon" variant="ghost">
                              <FileEditIcon className="w-4 h-4" />
                              <span className="sr-only">Edit</span>
                           </Button>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </div>
      </main>
   );
};

Page.getLayout = GlobalAdminLayout;

export default Page;
