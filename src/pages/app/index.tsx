import { CardContent, Card } from "@/components/ui/card"
import { BookIcon, FilmIcon, GamepadIcon, GlobeIcon, MenuIcon, MusicIcon } from "lucide-react"
import { NextPageWithLayout } from "@/types/global"
import GlobalLayout from "@/layout/global"
import { useRouter } from "next/router"
import { prisma } from "@/lib/prisma"
import { Category } from "@/types/responseTypes"

const list = [
  {
    title: "Music",
    icon: MusicIcon,
  },
  {
    title: "Gaming",
    icon: GamepadIcon,
  },
  {
    title: "Reading",
    icon: BookIcon,
  },
  {
    title: "Movies",
    icon: FilmIcon,
  },
  {
    title: "Travel",
    icon: GlobeIcon,
  },
  {
    title: "Food",
    icon: MenuIcon,
  },
  {
    title: "Music",
    icon: MusicIcon,
  },
  {
    title: "Gaming",
    icon: GamepadIcon,
  },
  {
    title: "Reading",
    icon: BookIcon,
  },
  {
    title: "Movies",
    icon: FilmIcon,
  },
  {
    title: "Travel",
    icon: GlobeIcon,
  },
  {
    title: "Food",
    icon: MenuIcon,
  },

]

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
              {props.data.map((service, index) => (
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

Page.getLayout = GlobalLayout;



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
  console.log("fetching data...")

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