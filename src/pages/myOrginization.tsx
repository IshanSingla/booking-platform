import GlobalLayout, { GlobalLoginLayout } from '@/layout/global';
import { NextPageWithLayout } from '@/types/global';
import React from 'react'

const Page: NextPageWithLayout = () => {
  return (
    <div>myOrginization</div>
  )
};

Page.getLayout = GlobalLoginLayout;

export default Page;