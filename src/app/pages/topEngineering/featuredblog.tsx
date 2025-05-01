"use client";  // Add this if inside `app/` folder

import Image from "next/image";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13
import styles from "./featuredblogs.module.css";  
import { featuredBlogs } from "./constant";

const FeaturedBlogs = () => {
  const router = useRouter(); // Initialize useRouter

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Featured Blogs</h2>
        <div className={styles.grid}>
          {featuredBlogs.map((blog) => (
            <div key={blog.id} className={styles.card}>
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
                <span 
                  className={styles.readMore}
                  onClick={() => router.push(`/components/viewDetails?id=${blog.id}`)} // ✅ Use router.push
                  role="button"
                  tabIndex={0}
                >
                  Read More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;