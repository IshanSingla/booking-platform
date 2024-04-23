import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { useRouter } from "next/router"
import { NextPageWithLayout } from "@/types/props"
import GlobalUserRequiredLayout from "@/layout/globalUserRequired"
import React from "react"
import axios from "axios"
import { OrganizationSchema } from "@/types/schema"
import { categoryContext } from "@/context/categoryContext"

const Page: NextPageWithLayout = () => {
    const router = useRouter()
    const { categories } = React.useContext(categoryContext)
    const [data, setData] = React.useState<OrganizationSchema[]>([])
    React.useEffect(() => {
        axios.get(`/api/org?categoryId=${router.query.category}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }
        , [router.query.category])
    return (
        <main className="flex-1">
            <div className="bg-gray-100 py-6 dark:bg-gray-800">
                <div className="container grid gap-4 px-4 md:px-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold">Organizations</h1>
                        <p className="text-gray-500 dark:text-gray-400">Explore the organizations using the form below</p>
                    </div>
                    <div className="">Category: {categories.find(
                        (category) => category.id === router.query.category
                    )?.name}</div>
                    <div className="grid gap-4">
                        <div className="flex flex-col gap-2 md:flex-row md:items-end md:gap-4 lg:gap-6">
                            <div className="w-full grid gap-1">
                                <Label className="text-base" htmlFor="location">
                                    Enter a location
                                </Label>
                                <Input className="w-full max-w-[400px] text-xl text-gray-500" id="location" placeholder="Enter a location" />
                            </div>
                            <Button size="lg" variant={"outline"}  >
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {data.length === 0 ? <div className="container flex items-center justify-center h-full  lg:h-[40vh] w-full border">No Category Found</div> :
                <div className="container grid gap-6 px-4 py-6 md:px-6 lg:grid-cols-2 lg:gap-10 bg-white">
                    {
                        data.map((org, index) => (
                            <Card key={index} className="flex flex-col gap-2 cursor-pointer hover:drop-shadow-md" onClick={() => router.push(`/org/${org.id}`)}>
                                <CardHeader className="pb-0">
                                    <CardTitle className="text-2xl font-bold leading-none">{org.orgName}</CardTitle>
                                    <CardDescription className="text-gray-500">
                                        <div>{org.boardName} of Education</div>
                                        <div>
                                            {org.address}, {org.pincode}
                                        </div>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-wrap gap-2 justify-end">


                                </CardContent>
                                <CardFooter className="mt-auto grid gap-2">
                                    <div className="text-sm font-medium">Contact:</div>
                                    <div className="text-sm">{org.email}</div>
                                    <div className="text-sm">{org.phoneNumber}</div>

                                </CardFooter>
                            </Card>
                        ))}
                </div>
            }
        </main>
    )
}

Page.getLayout = GlobalUserRequiredLayout;

export default Page;
