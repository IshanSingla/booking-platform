import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { DeleteIcon, FileEditIcon } from "lucide-react";
import React, { FormEvent } from "react";
import CreateCategory from "./create-category";
import { Label } from "@/components/ui/label";

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

  const handleUpdate = async (id: string, e: FormEvent<HTMLFormElement>) => {
    let form: any = e.target;
    const formData = {
      name: form?.name?.value,
      description: form?.description?.value,
      image: form?.image?.value,
    };
    try {
      const data = await axios.put(`/api/admin/categories?id=${id}`, formData);
      if (data.status === 200) {
        alert("Category updated successfully");
      } else {
        alert("An error occurred");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const data = await axios.delete(`/api/admin/categories?id=${id}`);
      if (data.status === 200) {
        alert("Category deleted successfully");
      } else {
        alert("An error occurred");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  if (loading) return <Skeleton className="w-full h-full rounded-full" />;
  return (
    <main className="flex flex-1 flex-col p-4 md:p-10 gap-3">
      <div className="w-full  text-center flex flex-row gap-3 ">
        <Input placeholder="Search Category" className="w-full" />
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              Create Category
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white">
            {/* <CreateCategory /> */}
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-lg border">
        <Table className="border text-center">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">S.No</TableHead>
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
                <TableCell className="space-x-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="icon" variant="outline">
                        <FileEditIcon className="w-4 h-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white">
                      <form onSubmit={(e) => handleUpdate(admin?.id, e)}>
                        <DialogTitle className="text-lg font-semibold">
                          Update Category
                        </DialogTitle>

                        <div className="flex flex-col gap-3">
                          <div className="w-full">
                            <Label
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              htmlFor="name"
                            >
                              Category Name
                            </Label>
                            <Input
                              className="mt-2"
                              type="text"
                              placeholder="Enter category name"
                              id="name"
                              required={true}
                            />
                            <p className="mt-1 text-xs text-gray-500">
                              *This field is required
                            </p>
                          </div>
                          <div className="w-full">
                            <Label
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              htmlFor="description"
                            >
                              Category Description
                            </Label>
                            <Input
                              className="mt-2"
                              type="text"
                              placeholder="Enter category description"
                              id="description"
                            />
                          </div>
                          <div className="w-full">
                            <Label
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              htmlFor="image"
                            >
                              Image URL
                            </Label>
                            <Input
                              className="mt-2"
                              type="text"
                              placeholder="Enter category image url."
                              id="image"
                            />
                          </div>
                          <DialogClose>
                            <Button
                              type="submit"
                              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                              Update Category
                            </Button>
                          </DialogClose>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button size="icon" variant="outline">
                        <DeleteIcon className="w-4 h-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-white">
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete the Category?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(admin?.id)}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
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
