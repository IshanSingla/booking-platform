import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
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
import { AdminOrganizationProps, AdminUserProps } from "@/types/responseTypes";
import axios from "axios";
import { FileEditIcon, Trash2 } from "lucide-react";
import React from "react";

const Page: NextPageWithLayout = () => {
  const [data, setData] = React.useState<AdminOrganizationProps>([]);
  const [loading, setLoading] = React.useState(true);
  const { toast } = useToast();

  React.useEffect(() => {
    setLoading(true);
    loadData();
  }, []);

  const loadData = () => {
    axios
      .get("/api/admin/organizations")
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }

  const handleUpdate = async (id: string, disabled: boolean) => {
    axios
      .put(`/api/admin/organizations?id=${id}`, { isVerified: disabled })
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
      .delete(`/api/admin/orginizations?id=${id}`)
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
        <Input placeholder="Search Orginization" className="w-full" />
      </div>
      <div className="rounded-lg border">
        <Table className="border text-center">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">SNo</TableHead>
              <TableHead className="text-center">Org Name</TableHead>
              <TableHead className="text-center">Board Name / Affiliation Number</TableHead>
              <TableHead className="text-center">Address / Pincode</TableHead>
              <TableHead className="text-center">Email / Phone Number</TableHead>
              <TableHead className="text-center">Extra Curricular / Infrastructure</TableHead>
              <TableHead className="text-center">Category</TableHead>
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
                <TableCell className="font-medium">{admin.orgName}</TableCell>
                <TableCell className="font-medium">
                  <div className="">
                    <div className="text-sm">{admin?.boardName}</div>
                    <div className="text-xs">{admin?.affiliationNumber}</div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div className="">
                    <div className="text-sm">{admin?.address}</div>
                    <div className="text-xs">{admin?.pincode}</div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div className="">
                    <div className="text-sm">{admin?.email}</div>
                    <div className="text-xs">{admin?.phoneNumber}</div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div className="">
                    <div className="text-sm" id="extracurricular">
                      {admin?.extracurricular.sports ? "Sports, " : ""}
                      {admin?.extracurricular.arts ? "Arts, " : ""}
                      {admin?.extracurricular.music ? "Music, " : ""}
                      {admin?.extracurricular.debate ? "Debate, " : ""}
                      {admin?.extracurricular.community ? "Community, " : ""}
                    </div>
                    <div className="text-xs" id="infrastructure">
                      {admin?.infrastructure.smartClass ? "Smart Class, " : ""}
                      {admin?.infrastructure.library ? "Library, " : ""}
                      {admin?.infrastructure.laboratories ? "Laboratories, " : ""}
                      {admin?.infrastructure.playground ? "Playground, " : ""}
                      {admin?.infrastructure.computerLab ? "Computer Lab, " : ""}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div className="">
                    <div className="text-sm">{admin?.category?.name}</div>
                    <div className="text-xs">{admin?.category?.description} </div>
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
                    onClick={() => handleUpdate(admin?.id, !admin?.isVerified)}
                    variant="outline"
                    className={
                      admin.isVerified
                        ?
                        "bg-red-500 text-white" : "bg-green-500 text-white"
                    }
                  >
                    {admin.isVerified ? "Disable" : "Enable"}

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
