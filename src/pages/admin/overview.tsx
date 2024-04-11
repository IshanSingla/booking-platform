import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
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
import { AdminOverviewProps } from "@/types/responseTypes";
import axios from "axios";
import {
  BuildingIcon,
  DeleteIcon,
  FileEditIcon,
  ListIcon,
  MailIcon,
  Trash2,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const Page: NextPageWithLayout = () => {
  const [data, setData] = React.useState<AdminOverviewProps>({
    category: 0,
    organization: 0,
    request: 0,
    user: 0,
    admins: [],
  });
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("/api/admin/overview")
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const data = await axios.delete(`/api/admin/users?id=${id}`);
      if (data.status === 201) {
        alert("Category created successfully");
      } else {
        alert("An error occurred");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  const createAdmin = async (id: string, e: any) => {
    const form = e.target;
    const formData = {
      name: form.name.value,
      phoneNumber: form.phoneNumber.value,
    };
    try {
      const data = await axios.post(`/api/admin/overview`, formData);
      if (data.status === 200) {
        alert("Admin created successfully");
      } else {
        alert("An error occurred");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  if (loading) return <Skeleton className="w-full h-full rounded-full" />;
  return (
    <main className="flex flex-1 flex-col gap-3 p-4 md:p-10 h-full w-full">
      <div className=" grid-cols-2 gap-4 md:grid md:gap-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.user}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Total Organizations
            </CardTitle>
            <BuildingIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.organization}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Total Requests
            </CardTitle>
            <MailIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.request}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Total Categories
            </CardTitle>
            <ListIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.category}</div>
          </CardContent>
        </Card>
      </div>
      <div className="w-full  text-center flex flex-row gap-3 mt-3">
        <Input placeholder="Search Admin User" className="w-full" />
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              Create Admin
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white">
            <DialogTitle className="text-lg font-semibold">
              Create Admin
            </DialogTitle>

            <div className="flex flex-col gap-3">
              <Input placeholder="Name" />
              <Input placeholder="PhoneNumber" />
              <DialogClose>
                <Button className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  Create Admin
                </Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-lg border">
        <Table className="border text-center">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">SNo</TableHead>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">PhoneNumber</TableHead>
              <TableHead className="text-center">Role</TableHead>
              <TableHead className="text-center">Last Login Details</TableHead>
              <TableHead className="text-center">
                CreatedAt / UpdateAt
              </TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.admins.map((admin: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-medium">{admin.name}</TableCell>
                <TableCell className="font-medium">
                  {admin.phoneNumber}
                </TableCell>
                <TableCell>{admin.role}</TableCell>
                <TableCell>
                  <div className="">
                    <div className="text-sm">{admin?.loginIp}</div>
                    <div className="text-xs">{admin?.loginDevice}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="">
                    <div className="text-sm">
                      {new Date(admin?.createdAt).toLocaleDateString() ?? ""}{" "}
                      {new Date(admin?.createdAt).toLocaleTimeString() ?? ""}
                    </div>
                    <div className="text-xs">
                      {new Date(admin?.updatedAt).toLocaleDateString() ?? ""}{" "}
                      {new Date(admin?.updatedAt).toLocaleTimeString() ?? ""}
                    </div>
                  </div>
                </TableCell>

                <TableCell className="">
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
                          Are you sure you want to delete this user?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          formAction={() => handleDelete(admin?.id)}
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
