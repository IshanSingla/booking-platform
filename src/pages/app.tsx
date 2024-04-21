import { CardContent, Card } from "@/components/ui/card"
import { BookIcon } from "lucide-react"
import { useRouter } from "next/router"
import GlobalUserRequiredLayout from "@/layout/globalUserRequired"
import { useContext } from "react"
import { categoryContext } from "@/context/categoryContext"


const Page: any = () => {
  const router = useRouter()
  const { categories } = useContext(categoryContext)
  return (
    <main className="flex items-center justify-center min-h-[87vh] p-4 ">
      <div className="grid gap-4 w-full max-w-2xl">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose a category</h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {"Let's find the perfect match for your mood."}
          </p>
        </div>
        <Card className="bg-white">
          <CardContent className="p-0">
            <div className="grid gap-3 md:gap-5 sm:grid-cols-2 lg:grid-cols-3 p-4">
              {categories.map((service, index) => (
                <Card onClick={
                  () => router.push(`/org?category=${service.id}`)
                } key={index} className="flex flex-col gap-2 items-center justify-center p-4 rounded-lg bg-gray-100/40 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                  <BookIcon className="w-12 h-12  aspect-square object-cover " />
                  <div className="font-semibold w-full text-center">{service.name}</div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

Page.getLayout = GlobalUserRequiredLayout;



export default Page;