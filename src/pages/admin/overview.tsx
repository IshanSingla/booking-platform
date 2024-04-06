import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { GlobalAdminLayout } from "@/layout/GlobalAdminLayout"
import { NextPageWithLayout } from "@/types/props"
import { AdminOverviewProps } from "@/types/responseTypes"
import axios from "axios"
import { BuildingIcon, FileEditIcon, ListIcon, MailIcon, UsersIcon } from "lucide-react"
import React from "react"

const Page: NextPageWithLayout = () => {
  const [data, setData] = React.useState<AdminOverviewProps>({
    category: 0,
    organization: 0,
    request: 0,
    user: 0,
    admins: [],
  });

  React.useEffect(() => {
    axios.get("/api/admin/overview").then((res) => {
      setData(res.data);
    }
    ).catch((err) => {
      console.error(err);
    }
    );

  }, []);
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="hidden grid-cols-2 gap-4 md:grid md:gap-8">
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
            <CardTitle className="text-sm font-medium">Total Organizations</CardTitle>
            <BuildingIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.organization}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <MailIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.request}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Categories</CardTitle>
            <ListIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.category}</div>
          </CardContent>
        </Card>
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
  )
}

Page.getLayout = GlobalAdminLayout;

export default Page;