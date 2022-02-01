import type { NextPage } from "next";
import { HeadProps } from "../components/page/head";

const head: HeadProps = {
  pageTitle: "LTFan",
  pageDescription: "LTFan's home page",
  topBarTitle: "LTFan",
};

export function getStaticProps() {
  return {
    props: {
      head: head,
    },
  };
}

const Home: NextPage = () => {
  return (
    <>
      <h2>你好！</h2>
      <p>这是我未来的主页，欢迎关注本站更多动态！</p>
    </>
  );
};

export default Home;
