import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";

const BlogDetail: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{`Blog post ${router.query.id}`} </h1>
        <button></button>
      </main>
    </div>
  );
};

export default BlogDetail;
