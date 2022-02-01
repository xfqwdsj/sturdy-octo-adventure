import fs from 'fs';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import path from 'path';
import React, { ReactNode } from 'react';

const dir = path.join(process.cwd(), 'pages_mdx');

function getFilePaths() {
  const fileNames = fs.readdirSync(dir);
  return fileNames.map((name) => {
    return {
      params: {
        file: name.replace(/\.mdx$/, ''),
      },
    };
  });
}

interface MDXPageParams {
  params: {
    file: string;
  };
}

interface MDXPageProps {
  file: string;
  children?: ReactNode;
}

export async function getStaticPaths() {
  const paths = getFilePaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: MDXPageParams) {
  return {
    props: {
      file: params.file,
    },
  };
}

const Page: NextPage<MDXPageProps> = ({ file }) => {
  const path = `../pages_mdx/${file}.mdx`;
  let component;

  if (process.browser) {
    const Component = dynamic(() => import(path));
    component = <Component />;
  } else {
    const Component = require(path).default;
    const DOMServer = require('react-dom/server');
    const html = DOMServer.renderToString(<Component />) as string;
    component = <div dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return component;
};

export default Page;
