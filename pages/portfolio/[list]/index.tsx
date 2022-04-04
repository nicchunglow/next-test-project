import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";

const ListPage: NextPage = () => {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{`List ${router.query.list}`}</h1>{" "}
      </main>
    </div>
  );
};

export default ListPage;
