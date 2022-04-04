import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

interface IBlog {
  id: number;
  blogName: string;
}

const BlogPage: NextPage = () => {
  const router = useRouter();
  const blogPosts: IBlog[] = [
    { id: 1, blogName: "Wow" },
    { id: 2, blogName: "baaam" },
  ];
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Blog post</h1>
        {blogPosts.map((blog) => {
          return (
            <div>
              <Link href={{ pathname: "/blog/[id]", query: { id: blog.id } }}>{blog.blogName}</Link>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default BlogPage;
