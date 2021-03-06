import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Head from "next/head";
import { wrapper } from "../store/configureStore";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>ν | νΈμν°</title>
      </Head>
      <Component />
    </>
  );
};

export default wrapper.withRedux(App);
