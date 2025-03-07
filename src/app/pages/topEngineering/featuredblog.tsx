"use client";  // Add this if inside `app/` folder

import Image from "next/image";
import styles from "./featuredblogs.module.css";  
import { featuredBlogs } from "./constant";
const FeaturedBlogs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Featured Blogs</h2>
        <div className={styles.grid}>
          {featuredBlogs.map((blog) => (
            <a key={blog.id} href={blog.link} className={styles.card}>
              <div className={styles.imageWrapper}> {/* ✅ Ensure it has position: relative in CSS */}
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill" // ✅ Alternative to `fill`
                  objectFit="cover"
                  className={styles.image}
                  priority={blog.id === 1}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{blog.title}</h3>
                <p className={styles.description}>{blog.description}</p>
                <span className={styles.readMore}>Read More →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
