import { CardContent, Card } from "@/components/ui/card"
import { BookIcon } from "lucide-react"
import { useRouter } from "next/router"
import { prisma } from "@/lib/prisma"
import { Category } from "@/types/responseTypes"
import GlobalUserRequiredLayout from "@/layout/globalUserRequired"


const Page: any = (props: {
  data: Category[]
}) => {
  const router = useRouter()
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
              {props?.data?.map((service, index) => (
                <Card onClick={
                  () => router.push(`/org?category=${service.id}`)
                } key={index} className="flex items-center justify-center p-4 rounded-lg bg-gray-100/40 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                  <div className="space-y-2 text-center">
                    <BookIcon className="w-12 h-12  aspect-square object-cover " />
                    <div className="font-semibold">{service.name}</div>
                  </div>
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

export async function getStaticProps() {
  const data = await prisma.category.findMany(
    {
      select: {
        id: true,
        name: true,
        description: true,
        image: true
      }
    }
  );

  return {
    props: {
      data
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 600, // In seconds
  }
}