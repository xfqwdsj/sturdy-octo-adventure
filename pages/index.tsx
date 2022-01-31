import type { NextPage } from 'next'
import { HeadProps } from '../components/page/head'
import MDXDocument, { metadata } from 'index.mdx'

const head: HeadProps = {
  pageTitle: 'LTFan',
  pageDescription: 'LTFan\'s home page',
  topBarTitle: metadata.title
}

export function getStaticProps() {
  return {
    props: {
      head: head
    }
  }
}

const Home: NextPage = () => {
  return (
    <MDXDocument />
  )
}

export default Home