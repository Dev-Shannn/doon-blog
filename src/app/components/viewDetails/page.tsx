import React from "react";
import { motion } from "framer-motion";
import styles from './page.module.css';

const TopEngComponent = () => {
  return (
    <div className={styles.container}>
      {/* 🚀 Animated Heading */}
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        UPES Dehradun
      </motion.h1>

      {/* ✅ Dynamic Grid Section */}
      <div className={styles.gridContainer}>
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            <h2 className={styles.subheading}>{item.title}</h2>
            {item.isList ? (
              <ul className={styles.list}>
                {Array.isArray(item.content) &&
                  item.content.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
              </ul>
            ) : (
              <p className={styles.paragraph}>{item.content}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ✅ Data Array for Cards
const data = [
  {
    title: "Summary",
    content:
      "UPES Dehradun, established in 2003, is a premier university known for its excellence in engineering, law, management, and applied sciences.",
    isList: false,
  },
  {
    title: "Courses Offered",
    content: [
      "B.Tech in Computer Science Engineering",
      "B.Tech in Mechanical Engineering",
      "B.Tech in Civil Engineering",
      "B.Tech in Electrical Engineering",
      "B.Tech in Aerospace Engineering",
      "MBA in various specializations",
    ],
    isList: true,
  },
  {
    title: "Fee Structure",
    content: [
      "B.Tech: INR 3,50,000 per year",
      "M.Tech: INR 2,50,000 per year",
      "MBA: INR 4,50,000 per year",
      "LLB: INR 2,00,000 per year",
    ],
    isList: true,
  },
  {
    title: "Placements",
    content:
      "UPES Dehradun has an excellent placement record with top companies visiting the campus for recruitment.",
    isList: false,
  },
  {
    title: "Contact Information",
    content: [
      "Address: Energy Acres, Bidholi, Via Prem Nagar, Dehradun, Uttarakhand 248007, India",
      "Email: enrollments@upes.ac.in",
    ],
    isList: true,
  },
];

export default TopEngComponent;
