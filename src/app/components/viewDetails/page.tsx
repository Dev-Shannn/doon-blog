import React from 'react';
import styles from './page.module.css'; // Corrected import

const TopEngComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>UPES Dehradun</h1>
      <section className={styles.section}>
        <h2 className={styles.subheading}>Summary</h2>
        <p className={styles.paragraph}>
          UPES Dehradun, established in 2003, is a premier university known for its excellence in engineering, law, management, and applied sciences. The university offers industry-focused education and top-tier placements, making it a preferred choice for students seeking quality education and career opportunities.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subheading}>Courses Offered</h2>
        <ul className={styles.list}>
          <li>B.Tech in Computer Science Engineering</li>
          <li>B.Tech in Mechanical Engineering</li>
          <li>B.Tech in Civil Engineering</li>
          <li>B.Tech in Electrical Engineering</li>
          <li>B.Tech in Aerospace Engineering</li>
          <li>B.Tech in Chemical Engineering</li>
          <li>M.Tech in Computer Science Engineering</li>
          <li>M.Tech in Mechanical Engineering</li>
          <li>M.Tech in Civil Engineering</li>
          <li>M.Tech in Electrical Engineering</li>
          <li>M.Tech in Aerospace Engineering</li>
          <li>M.Tech in Chemical Engineering</li>
          <li>MBA in various specializations</li>
          <li>LLB in various specializations</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subheading}>Fee Structure</h2>
        <p className={styles.paragraph}>
          The fee structure for various courses at UPES Dehradun is as follows:
        </p>
        <ul className={styles.list}>
          <li>B.Tech: INR 3,50,000 per year</li>
          <li>M.Tech: INR 2,50,000 per year</li>
          <li>MBA: INR 4,50,000 per year</li>
          <li>LLB: INR 2,00,000 per year</li>
        </ul>
        <p className={styles.paragraph}>
          Note: The fee structure is subject to change. Please refer to the official UPES website for the latest fee details.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subheading}>Placements</h2>
        <p className={styles.paragraph}>
          UPES Dehradun has an excellent placement record with top companies visiting the campus for recruitment. The university has a dedicated placement cell that provides training and support to students to help them secure lucrative job offers.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subheading}>Contact Information</h2>
        <p className={styles.paragraph}>
          Address: Energy Acres, Bidholi, Via Prem Nagar, Dehradun, Uttarakhand 248007, India
        </p>
    
        <p className={styles.paragraph}>
          Email: enrollments@upes.ac.in
        </p>
      </section>
    </div>
  );
}

export default TopEngComponent;