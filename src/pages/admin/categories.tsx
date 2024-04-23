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
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { GlobalAdminLayout } from "@/layout/GlobalAdminLayout";
import { NextPageWithLayout } from "@/types/props";
import { AdminCategoryProps } from "@/types/responseTypes";
import axios from "axios";
import { BookIcon, FileEditIcon, Trash2 } from "lucide-react";
import React from "react";
const Page: NextPageWithLayout = () => {
  const [data, setData] = React.useState<AdminCategoryProps>([]);
  const [loading, setLoading] = React.useState(true);
  const { toast } = useToast();

  React.useEffect(() => {
    setLoading(true);
    return loadData();
  }, []);

  const loadData = () => {
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
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let form: any = e.target;
    const formData = {
      name: form?.name?.value,
      description: form?.description.value,
      image: form?.image.value,
    };
    try {
      const data = await axios.post("/api/admin/categories", formData);
      if (data.status === 201) {
        alert("Category created successfully");
      } else {
        alert("An error occurred");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleUpdate = async (
    id: string,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    console.log(e, id);

    const form: any = e.target;
    const formData = {
      name: form?.name?.value,
      description: form?.description?.value,
      image: form?.image?.value,
    };
    axios
      .put(`/api/admin/categories?id=${id}`, formData)
      .then((res) => {
        toast({
          title: "Success",
          description: res.data,
          className: "bg-green-300",
        });
        loadData();
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: err.message,
          duration: 5000,
          action: (
            <ToastAction
              onClick={() => {
                toast({
                  title: "Api Response",
                  description: JSON.stringify(err.response.data),
                });
              }}
              altText="Goto schedule to undo"
            >
              Check Response
            </ToastAction>
          ),
        });
      });
  };

  const handleDelete = async (id: string) => {
    axios
      .delete(`/api/admin/categories?id=${id}`)
      .then((res) => {
        toast({
          title: "Success",
          description: res.data,
          className: "bg-green-300",
        });
        loadData();
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: err.message,
          duration: 5000,
          action: (
            <ToastAction
              onClick={() => {
                toast({
                  title: "Api Response",
                  description: JSON.stringify(err.response.data),
                });
              }}
              altText="Goto schedule to undo"
            >
              Check Response
            </ToastAction>
          ),
        });
      });
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
                  name="name"
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
                  placeholder="Enter category description"
                  id="description"
                  name="description"
                />
              </div>
              <div className="w-full">
                <Label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="image"
                >
                  Svg Icon Image
                </Label>
                <Textarea
                  className="mt-2"
                  placeholder="Enter category SVG."
                  id="image"
                  name="image"
                />
              </div>
              <DialogClose>
                <Button
                  type="submit"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Create Category
                </Button>
              </DialogClose>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-lg border">
        <Table className="border text-center">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">SNo</TableHead>
              <TableHead className="text-center w-[100px]">Icon</TableHead>
              <TableHead className="text-center w-[20%]">Name</TableHead>
              <TableHead className="text-center">Description</TableHead>
              <TableHead className="text-center w-[200px]">
                CreatedAt / UpdateAt
              </TableHead>
              <TableHead className="text-center w-[150px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((admin: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-medium item-center justify-center flex">
                  {admin?.image ? (
                    <div
                      className="w-12 h-12 bg-cover bg-center bg-no-repeat rounded-full"
                      dangerouslySetInnerHTML={{ __html: admin?.image }}
                    />
                  ) : (
                    <BookIcon className="w-12 h-12  aspect-square object-cover " />
                  )}
                </TableCell>
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
                    <DialogContent className="bg-white w-full">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleUpdate(admin?.id, e);
                        }}
                      >
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
                              name="name"
                              required={true}
                              defaultValue={admin?.name}
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
                              placeholder="Enter category description"
                              id="description"
                              name="description"
                              defaultValue={admin?.description}
                            />
                          </div>
                          <div className="w-full">
                            <Label
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              htmlFor="image"
                            >
                              Svg Icon Image
                            </Label>
                            <Textarea
                              className="mt-2"
                              placeholder="Enter category SVG."
                              id="image"
                              name="image"
                              defaultValue={admin?.image}
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
                        <Trash2 className="w-4 h-4" />
                        <span className="sr-only">Delete</span>
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
