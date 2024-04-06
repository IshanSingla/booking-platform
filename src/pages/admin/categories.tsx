import { Button } from "@/components/ui/button";
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
import {
   BuildingIcon,
   FileEditIcon,
   ListIcon,
   MailIcon,
   UsersIcon,
} from "lucide-react";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
   return (
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
         <div className="w-full md:w-1/3 text-center">
            <Link
               href="./create-category"
               className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
               Create Category
            </Link>
         </div>
         <div className="rounded-lg border">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-[100px]">User</TableHead>
                     <TableHead>Role</TableHead>
                     <TableHead>Organization</TableHead>
                     <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  <TableRow>
                     <TableCell className="font-medium">John Doe</TableCell>
                     <TableCell>Admin</TableCell>
                     <TableCell>LOGO</TableCell>
                     <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                           <FileEditIcon className="w-4 h-4" />
                           <span className="sr-only">Edit</span>
                        </Button>
                     </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell className="font-medium">Jane Smith</TableCell>
                     <TableCell>User</TableCell>
                     <TableCell>Example Corp</TableCell>
                     <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                           <FileEditIcon className="w-4 h-4" />
                           <span className="sr-only">Edit</span>
                        </Button>
                     </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell className="font-medium">Mike Johnson</TableCell>
                     <TableCell>User</TableCell>
                     <TableCell>FooBar LLC</TableCell>
                     <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                           <FileEditIcon className="w-4 h-4" />
                           <span className="sr-only">Edit</span>
                        </Button>
                     </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell className="font-medium">Sarah Adams</TableCell>
                     <TableCell>Admin</TableCell>
                     <TableCell>Example Corp</TableCell>
                     <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                           <FileEditIcon className="w-4 h-4" />
                           <span className="sr-only">Edit</span>
                        </Button>
                     </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell className="font-medium">Alex Brown</TableCell>
                     <TableCell>User</TableCell>
                     <TableCell>LOGO</TableCell>
                     <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                           <FileEditIcon className="w-4 h-4" />
                           <span className="sr-only">Edit</span>
                        </Button>
                     </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </div>
      </main>
   );
};

Page.getLayout = GlobalAdminLayout;

export default Page;
