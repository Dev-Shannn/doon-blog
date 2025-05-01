"use client"; // Ensure this file is a Client Component

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import { collegeDetails } from "@/app/pages/topEngineering/constant";

interface CollegeDetails {
  id: number;
  summary: string;
  courses?: string[];
  fees?: string[];
  placements?: string;
  contact?: {
    address?: string;
    email?: string;
  };
}

// Component that uses useSearchParams()
const CollegeDetailsComponent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [stateVariable, setStateVariable] = useState<CollegeDetails | null>(null);

  useEffect(() => {
    if (id) {
      const selectedCollege = collegeDetails.find((college) => college.id === Number(id));
      if (selectedCollege) {
        setStateVariable(selectedCollege);
      }
    }
  }, [id]);

  console.log("State Variable:", stateVariable);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>College ID: {id}</h1>

      {/* ✅ Dynamic Grid Section */}
      <div className={styles.gridContainer}>
        <div className={styles.card}>
          <h2 className={styles.subheading}>Summary</h2>
          <p className={styles.paragraph}>
            {stateVariable?.summary || "UPES Dehradun, established in 2003, is a premier university known for its excellence in engineering, law, management, and applied sciences."}
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.subheading}>Courses Offered</h2>
          <ul className={styles.list}>
            {stateVariable?.courses?.length ? (
              stateVariable.courses.map((course, index) => <li key={index}>{course}</li>)
            ) : (
              <>
                <li>B.Tech in Computer Science Engineering</li>
                <li>B.Tech in Mechanical Engineering</li>
                <li>B.Tech in Civil Engineering</li>
                <li>B.Tech in Electrical Engineering</li>
                <li>B.Tech in Aerospace Engineering</li>
                <li>MBA in various specializations</li>
              </>
            )}
          </ul>
        </div>

        <div className={styles.card}>
          <h2 className={styles.subheading}>Fee Structure</h2>
          <ul className={styles.list}>
            {stateVariable?.fees?.length ? (
              stateVariable.fees.map((fee, index) => <li key={index}>{fee}</li>)
            ) : (
              <>
                <li>B.Tech: INR 3,50,000 per year</li>
                <li>M.Tech: INR 2,50,000 per year</li>
                <li>MBA: INR 4,50,000 per year</li>
                <li>LLB: INR 2,00,000 per year</li>
              </>
            )}
          </ul>
        </div>

        <div className={styles.card}>
          <h2 className={styles.subheading}>Placements</h2>
          <p className={styles.paragraph}>
            {stateVariable?.placements || "UPES Dehradun has an excellent placement record with top companies visiting the campus for recruitment."}
          </p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.subheading}>Contact Information</h2>
          <p className={styles.paragraph}>
            {stateVariable?.contact?.address ? `Address: ${stateVariable.contact.address}` : "Address not available"}
          </p>
          <p className={styles.paragraph}>
            {stateVariable?.contact?.email ? `Email: ${stateVariable.contact.email}` : "Email not available"}
          </p>
        </div>
      </div>
    </div>
  );
};

// ✅ Wrap with Suspense to avoid Next.js build issues
const TopEngComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CollegeDetailsComponent />
    </Suspense>
  );
};

export default TopEngComponent;
