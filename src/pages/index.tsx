import { About, Contact, Hero, Services } from "@/components/Home";
import GlobalLayout from "@/layout/global";
import { NextPageWithLayout } from "@/types/global";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
};

Page.getLayout = GlobalLayout;

export default Page;
