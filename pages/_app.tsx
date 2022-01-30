import Head from 'next/head'
import Image from 'next/image'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>LTFan</title>
        <meta name="description" content="LTFan's home page." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default MyApp
