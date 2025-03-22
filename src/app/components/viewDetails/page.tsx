import React from 'react';
import styles from './page.module.css';

const TopEngComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>UPES Dehradun</h1>

      {/* ✅ Dynamic Grid Section */}
      <div className={styles.gridContainer}>
        <div className={styles.card}>
          <h2 className={styles.subheading}>Summary</h2>
          <p className={styles.paragraph}>
            UPES Dehradun, established in 2003, is a premier university known for its excellence in engineering, law, management, and applied sciences.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.subheading}>Courses Offered</h2>
          <ul className={styles.list}>
            <li>B.Tech in Computer Science Engineering</li>
            <li>B.Tech in Mechanical Engineering</li>
            <li>B.Tech in Civil Engineering</li>
            <li>B.Tech in Electrical Engineering</li>
            <li>B.Tech in Aerospace Engineering</li>
            <li>MBA in various specializations</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2 className={styles.subheading}>Fee Structure</h2>
          <ul className={styles.list}>
            <li>B.Tech: INR 3,50,000 per year</li>
            <li>M.Tech: INR 2,50,000 per year</li>
            <li>MBA: INR 4,50,000 per year</li>
            <li>LLB: INR 2,00,000 per year</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2 className={styles.subheading}>Placements</h2>
          <p className={styles.paragraph}>
            UPES Dehradun has an excellent placement record with top companies visiting the campus for recruitment.
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.subheading}>Contact Information</h2>
          <p className={styles.paragraph}>
            Address: Energy Acres, Bidholi, Via Prem Nagar, Dehradun, Uttarakhand 248007, India
          </p>
          <p className={styles.paragraph}>
            Email: enrollments@upes.ac.in
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopEngComponent;