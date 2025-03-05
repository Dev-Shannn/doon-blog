"use client";  // Add this if inside `app/` folder

import Image from "next/image";
import styles from "./featuredblogs.module.css"; // ✅ Corrected import

const featuredBlogs = [
  {
    id: 1,
    title: "UPES Dehradun - Top 10 Colleges in Dehradun",
    description: "A curated list of the best colleges based on infrastructure, faculty, and placements.",
    image: "/college1.jpg",
    link: "/blog/top-10-colleges-dehradun",
  },
  {
    id: 2,
    title: "Why Study in Dehradun?",
    description: "Discover why dehradun is becoming a top destination for higher education.",
    image: "/college2.jpg",
    link: "/blog/why-study-in-dehradun",
  },
  {
    id: 3,
    title: "Best Engineering Colleges in Dehradun",
    description: "Explore the top engineering colleges and their unique offerings.",
    image: "/college3.jpg",
    link: "/blog/best-engineering-colleges",
  },
];

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
