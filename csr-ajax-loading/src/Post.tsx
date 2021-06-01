import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";
import Layout from "./components/Layout";

const Post = (props: any) => {
  let { pathname } = useLocation();
  const postUrl = pathname.replace("/posts/", "");

  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");

  useEffect(() => {
    axios.get(`/articles/${postUrl}.txt`).then(function (response) {
      setArticle(response.data);
    });
    axios.get(`/titles/${postUrl}.txt`).then(function (response) {
      setTitle(response.data);
    });
  }, [postUrl]);

  if (!title || !article) return <Layout>Loading..</Layout>;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Layout>
        <div className="post">
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: article }}></div>
        </div>
      </Layout>
    </>
  );
};

export default Post;
