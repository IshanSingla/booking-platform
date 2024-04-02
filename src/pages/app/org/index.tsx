import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { useRouter } from "next/router"
import { NextPageWithLayout } from "@/types/global"
import GlobalLayout from "@/layout/global"

const Page: NextPageWithLayout = () => {
    const router = useRouter()
    return (
        <main className="flex-1">
            <div className="bg-gray-100 py-6 dark:bg-gray-800">
                <div className="container grid gap-4 px-4 md:px-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold">Organizations</h1>
                        <p className="text-gray-500 dark:text-gray-400">Explore the organizations using the form below</p>
                    </div>
                    <div className="grid gap-4">
                        <div className="flex flex-col gap-2 md:flex-row md:items-end md:gap-4 lg:gap-6">
                            <div className="w-full grid gap-1">
                                <Label className="text-base" htmlFor="location">
                                    Enter a location
                                </Label>
                                <Input className="w-full max-w-[400px] text-xl text-gray-500" id="location" placeholder="Enter a location" />
                            </div>
                            <Button className="w-full md:w-auto" size="lg" >
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container grid gap-6 px-4 py-6 md:px-6 lg:grid-cols-2 lg:gap-10 bg-white">
                <Card className="flex flex-col gap-2" onClick={() => router.push('/app/org/123')}>
                    <CardHeader className="pb-0">
                        <CardTitle className="text-2xl font-bold leading-none">LOGO</CardTitle>
                        <CardDescription className="text-gray-500">
                            The description of the organization goes here. It can be a little bit longer.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        <div className="rounded-md border w-[120px] h-8 flex items-center justify-center">Category 1</div>
                    </CardContent>
                    <CardFooter className="mt-auto grid gap-2">
                        <div className="text-sm font-medium">Contact:</div>
                        <Button size="sm">Message</Button>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col gap-2" onClick={() => router.push('/app/org/123')}>
                    <CardHeader className="pb-0">
                        <CardTitle className="text-2xl font-bold leading-none">Example Corp</CardTitle>
                        <CardDescription className="text-gray-500">
                            The description of the organization goes here. It can be a little bit longer.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        <div className="rounded-md border w-[120px] h-8 flex items-center justify-center">Category 1</div>
                    </CardContent>
                    <CardFooter className="mt-auto grid gap-2">
                        <div className="text-sm font-medium">Contact:</div>
                        <Button size="sm">Message</Button>
                    </CardFooter>
                </Card>
            </div>
        </main>
    )
}

Page.getLayout = GlobalLayout;

export default Page;
