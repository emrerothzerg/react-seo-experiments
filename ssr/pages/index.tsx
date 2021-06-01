import Head from "next/head";
import Layout from "../components/Layout";
import Summary from "../components/Summary";
import { summaries, websiteTitle } from "../data";

export default function Home() {
  return (
    <>
      <Head>
        <title>{websiteTitle}</title>
      </Head>
      <Layout>
        {summaries.map((summary) => (
          <Summary
            url={summary.url}
            title={summary.title}
            description={summary.description}
          />
        ))}
      </Layout>
    </>
  );
}
