import { About, Contact, Hero, Services } from "@/components/Home";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GlobalLayout from "@/layout/global";
import { NextPageWithLayout } from "@/types/global";
import { CodeIcon, ContainerIcon, GitCommitIcon, MountainIcon, RocketIcon } from "lucide-react";

import Link from "next/link"

const Page: NextPageWithLayout = () => {
  return (
    <main className="flex-1">
      <section className="w-full pt-12 md:pt-24 lg:pt-32" id="home">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                The complete platform for building the Web
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable.
                Open Source.
              </p>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 "
                  href="/app"
                >
                  Get Started
                </Link>

              </div>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
            height="300"
            src="/placeholder.svg"
            width="1270"
          />
        </div>
      </section>
      <section className="w-full py-6 md:py-12 lg:py-24 xl:py-32" id="about">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About LOGO</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {"We're on a mission to help teams build the best web experiences. Our platform provides the tools and workflow to innovate."}
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32" id="ourServices">
        <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 sm:gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col items-center space-y-2">
              <RocketIcon className="h-10 w-10" />
              <div className="space-y-2">
                <h3 className="font-bold">Feature Flags</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Control which users see which features with our feature flagging service.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <CodeIcon className="h-10 w-10" />
              <div className="space-y-2">
                <h3 className="font-bold">Code Review</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Make collaboration seamless with built-in code review tools.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <GitCommitIcon className="h-10 w-10" />
              <div className="space-y-2">
                <h3 className="font-bold">Continuous Integration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Automate your workflow with continuous integration.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <ContainerIcon className="h-10 w-10" />
              <div className="space-y-2">
                <h3 className="font-bold">Deployment</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Deploy to the cloud with a single click and scale with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Experience the workflow the best frontend teams love.
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
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
