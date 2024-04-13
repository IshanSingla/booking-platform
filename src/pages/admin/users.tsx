
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
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { GlobalAdminLayout } from "@/layout/GlobalAdminLayout";
import { cn } from "@/lib/cn";
import { NextPageWithLayout } from "@/types/props";
import { AdminUserProps } from "@/types/responseTypes";
import axios from "axios";
import { Delete, Trash2 } from "lucide-react";
import React from "react";


const Page: NextPageWithLayout = () => {
  const [data, setData] = React.useState<AdminUserProps>([]);
  const [loading, setLoading] = React.useState(true);
  const { toast } = useToast();

  React.useEffect(() => {
    setLoading(true);
    loadData();
  }, []);

  const loadData = () => {
    axios
      .get("/api/admin/users")
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
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

  const handleUpdate = async (id: string, disabled: boolean) => {
    axios
      .put(`/api/admin/users?id=${id}`, { disabled })
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
      .delete(`/api/admin/users?id=${id}`)
      .then((res) => {
        toast({
          key: id,
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
                  key: id,
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
        <Input placeholder="Search Users" className="w-full" />
      </div>
      <div className="rounded-lg border">
        <Table className="border text-center">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">S.No</TableHead>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">PhoneNumber</TableHead>
              <TableHead className="text-center">Email</TableHead>
              <TableHead className="text-center">Role</TableHead>
              <TableHead className="text-center">Last Login Details</TableHead>
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
                  {admin.phoneNumber}
                </TableCell>
                <TableCell className="font-medium">
                  {admin.email}
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
                      {new Date(admin?.createdAt)?.toLocaleDateString() ?? ""}{" "}
                      {new Date(admin?.createdAt)?.toLocaleTimeString() ?? ""}
                    </div>
                    <div className="text-xs">
                      {new Date(admin?.updatedAt)?.toLocaleDateString() ?? ""}{" "}
                      {new Date(admin?.updatedAt)?.toLocaleTimeString() ?? ""}
                    </div>
                  </div>
                </TableCell>
                <TableCell
                  className={cn("flex gap-3 justify-center items-center")}
                >
                  <Button
                    onClick={() => handleUpdate(admin?.id, !admin?.disabled)}
                    variant="outline"
                    className={
                      admin.disabled
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }
                  >
                    {admin.disabled ? "Enable" : "Disable"}

                  </Button>
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
