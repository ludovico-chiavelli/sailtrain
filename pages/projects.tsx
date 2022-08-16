import React, { useEffect } from 'react'
import Head from 'next/head'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

import Layout from '../components/layout'

const Page: NextPageWithLayout = () => {
  
  useEffect(() => {
    const CPFetch = async () => {
      const CodersrankPortfolio = await import('@codersrank/portfolio')
      return CodersrankPortfolio
    }
    CPFetch()
      .then(
        ({ default: CodersrankPortfolio}) => {
          console.log(CodersrankPortfolio)
          window.customElements.define('codersrank-portfolio', CodersrankPortfolio)
        }
      )
      .catch(
        (error) => {
          console.error(error)
        }
      )
  })
  return (
    <div className='text-white'>
      <codersrank-portfolio username="ludovico-chiavelli"></codersrank-portfolio>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <div className='h-full'>
      <Head>
        <title>Projects</title>
      </Head>
      <Layout>
        {page}
      </Layout>
    </div>
  )
}

export default Page