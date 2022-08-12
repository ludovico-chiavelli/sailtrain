import React from 'react'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel, alias velit numquam inventore ipsum eaque tempora perferendis unde nesciunt adipisci officia quisquam tenetur eius nisi quos accusantium reprehenderit nobis ad itaque minima fuga quia! Quas adipisci saepe earum tempore praesentium facilis corrupti aut. Omnis obcaecati quia qui modi quam cupiditate eaque et, alias iste ratione suscipit dignissimos nulla tempora, in explicabo expedita sunt aliquam magni id aspernatur dolor aut!</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page