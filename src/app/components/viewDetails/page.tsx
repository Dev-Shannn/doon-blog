import React from 'react';
import styles from './page.module.css'; // Corrected import

const TopEngComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>UPES Dehradun</h1>

      {/* ✅ Wrapped all sections inside a 3-Grid container */}
      <div className={styles.gridContainer}>
        
        {/* Summary Section */}
        <section className={styles.section}>
          <h2 className={styles.subheading}>Summary</h2>
          <p className={styles.paragraph}>
            UPES Dehradun, established in 2003, is a premier university known for its excellence in engineering, law, management, and applied sciences. 
          </p>
        </section>

        {/* Courses Offered */}
        <section className={styles.section}>
          <h2 className={styles.subheading}>Courses Offered</h2>
          <ul className={styles.list}>
            <li>B.Tech in Computer Science Engineering</li>
            <li>B.Tech in Mechanical Engineering</li>
            <li>B.Tech in Civil Engineering</li>
            <li>B.Tech in Electrical Engineering</li>
            <li>B.Tech in Aerospace Engineering</li>
            <li>MBA in various specializations</li>
          </ul>
        </section>

        {/* Fee Structure */}
        <section className={styles.section}>
          <h2 className={styles.subheading}>Fee Structure</h2>
          <ul className={styles.list}>
            <li>B.Tech: INR 3,50,000 per year</li>
            <li>M.Tech: INR 2,50,000 per year</li>
            <li>MBA: INR 4,50,000 per year</li>
            <li>LLB: INR 2,00,000 per year</li>
          </ul>
        </section>

        {/* Placements */}
        <section className={styles.section}>
          <h2 className={styles.subheading}>Placements</h2>
          <p className={styles.paragraph}>
            UPES Dehradun has an excellent placement record with top companies visiting the campus for recruitment. 
          </p>
        </section>

        {/* Contact Information */}
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
    </div>
  );
}

export default TopEngComponent;
