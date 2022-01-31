import Head from 'next/head'
import Image from 'next/image'
import type { AppProps } from 'next/app'
import 'mdui/dist/css/mdui.min.css'
import 'mdui'
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add('mdui-theme-primary-blue')
    document.body.classList.add('mdui-theme-accent-blue')
    document.body.classList.add('mdui-theme-layout-auto')
  })

  return (
    <div className='mdui-appbar-with-toolbar'>
      <Head>
        <title>LTFan</title>
        <meta name='description' content="LTFan's home page." />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='mdui-appbar mdui-appbar-fixed mdui-appbar-scroll-hide'>
        <div className='mdui-toolbar mdui-color-white'>
          <span className='mdui-typo-title'>Title</span>
        </div>
      </div>

      <div className='mdui-container'>
        <Component {...pageProps} />
      </div>

      <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default MyApp
