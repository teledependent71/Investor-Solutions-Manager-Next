import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Investor Solutions Manager</title>
          <meta
            property="og:title"
            content="test-page - Investor Solutions Manager"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_hdmo6b) => (
            <>
              <h1 id={context_hdmo6b?.Name}>Heading</h1>
            </>
          )}
          initialData={props.contextHdmo6bProp}
          persistDataDuringLoading={true}
          key={props?.contextHdmo6bProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextHdmo6bProp = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        contextHdmo6bProp: contextHdmo6bProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
