import Layout from "./components/Layout";
import Summary from "./components/Summary";
import { summaries, websiteTitle } from "./data";
import { Helmet } from "react-helmet";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <>
      <Helmet>
        <title>{websiteTitle}</title>
      </Helmet>
      <Layout>
        {summaries.map((summary, i) => (
          <Summary
            key={i}
            url={summary.url}
            title={summary.title}
            description={summary.description}
          />
        ))}
      </Layout>
    </>
  );
};

Home.defaultProps = {};

export default Home;
