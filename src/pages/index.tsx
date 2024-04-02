import { About, Contact, Hero, Services } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GlobalLayout from "@/layout/global";
import { NextPageWithLayout } from "@/types/global";
import { CodeIcon, ContainerIcon, GitCommitIcon, MountainIcon, RocketIcon } from "lucide-react";
import Image from "next/image";

import Link from "next/link"

const data = {
  hero: {
    title: "Laurem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    image: "/placeholder.svg",
  },
  about: {
    title: "About LOGO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
  },
  services: {
    title: "Our Services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    list: [
      {
        title: "Feature Flags",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        icon: RocketIcon,
      },
      {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        icon: CodeIcon,
      },
      {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        icon: GitCommitIcon,
      },
      {
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        icon: ContainerIcon,
      },
    ],
  },
  contact: {
    title: "Experience the workflow the best frontend teams love.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
  },
}

const Page: NextPageWithLayout = () => {
  return (
    <main className="flex-1">
      <section className="w-full pt-12 md:pt-24 lg:pt-32 min-h-[94vh] " id="home">
        <div className="container space-y-10 xl:space-y-16 h-full">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-[#275e5b]">
                {data.hero.title}
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <p className="mx-auto max-w-[700px] md:text-xl dark:text-gray-400">
                {data.hero.description}
              </p>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#144d53] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1a3c40] focus-visible:outline-none focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 "
                  href="/app"
                >
                  Get Started
                </Link>

              </div>
            </div>
          </div>
          <Image
            alt="Hero"
            className="mx-auto aspect-[3/1] overflow-hidden rounded-xl object-cover"
            src={data.hero.image}
            width={1270}
            height={400}
          />
        </div>
      </section>
      <section className="w-full py-6 md:py-12 lg:py-24 xl:py-32 border-t" id="about">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl ">{data.about.title}</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {data.about.description}
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t " id="ourServices">
        <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{data.services.title}</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {data.services.description}
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            {data.services.list.map((service, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <service.icon className="h-10 w-10" />
                <div className="space-y-2">
                  <h3 className="font-bold">{service.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {data.contact.title}
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {data.contact.description}
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Subscribe to get notified when we launch.
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

Page.getLayout = GlobalLayout;

export default Page;
