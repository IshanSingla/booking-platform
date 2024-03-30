import { CardContent, Card } from "@/components/ui/card"
import { BookIcon, FilmIcon, GamepadIcon, GlobeIcon, MenuIcon, MusicIcon } from "lucide-react"
import Link from "next/link"
import { NextPageWithLayout } from "@/types/global"
import GlobalLayout from "@/layout/global"

const Page: NextPageWithLayout = () => {
  return (
    <main className="flex items-center justify-center min-h-[85vh] p-4">
      <div className="grid gap-4 w-full max-w-2xl">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose a category</h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {"Let's find the perfect match for your mood."}
          </p>
        </div>
        <Card>
          <CardContent className="p-0">
            <div className="grid gap-4 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Link href={"/app/org?category=123"} className="flex items-center justify-center p-4 rounded-lg bg-gray-100/40 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                <div className="space-y-2 text-center">
                  <MusicIcon className="w-12 h-12 rounded-full aspect-square object-cover fill-current" />
                  <div className="font-semibold">Music</div>
                </div>
              </Link>
              <Link href={"/app/org?category=123"} className="flex items-center justify-center p-4 rounded-lg bg-gray-100/40 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                <div className="space-y-2 text-center">
                  <GamepadIcon className="w-12 h-12 rounded-full aspect-square object-cover fill-current" />
                  <div className="font-semibold">Gaming</div>
                </div>
              </Link>
              <Link href={"/app/org?category=123"} className="flex items-center justify-center p-4 rounded-lg bg-gray-100/40 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                <div className="space-y-2 text-center">
                  <BookIcon className="w-12 h-12 rounded-full aspect-square object-cover fill-current" />
                  <div className="font-semibold">Reading</div>
                </div>
              </Link>
              <Link href={"/app/org?category=123"} className="flex items-center justify-center p-4 rounded-lg bg-gray-100/40 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                <div className="space-y-2 text-center">
                  <FilmIcon className="w-12 h-12 rounded-full aspect-square object-cover fill-current" />
                  <div className="font-semibold">Movies</div>
                </div>
              </Link>
              <Link href={"/app/org?category=123"} className="flex items-center justify-center p-4 rounded-lg bg-gray-100/40 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                <div className="space-y-2 text-center">
                  <GlobeIcon className="w-12 h-12 rounded-full aspect-square object-cover fill-current" />
                  <div className="font-semibold">Travel</div>
                </div>
              </Link>
              <Link href={"/app/org?category=123"} className="flex items-center justify-center p-4 rounded-lg bg-gray-100/40 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                <div className="space-y-2 text-center">
                  <MenuIcon className="w-12 h-12 rounded-full aspect-square object-cover fill-current" />
                  <div className="font-semibold">Food</div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

Page.getLayout = GlobalLayout;

export default Page;