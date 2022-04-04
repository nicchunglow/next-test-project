import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";

const ListIdPage: NextPage = () => {
  const router = useRouter();
  const { list, id } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{`${list}`}</h1>
        <h2>{`List ${id}`}</h2>
      </main>
    </div>
  );
};

export default ListIdPage;
