"use client";
import styles from "./view-details.module.scss";
import ArrowLeftIcon from "@/icons/arrow_left.svg";
import Link from "next/link";
import data from "@/data/users.json";
import { formatNaira } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function UserDetailsPage() {
  const params = useParams<{ id: string }>();
  const [userData, setUserData] = useState(data);
  const user = userData.find((u) => u.id == Number(params.id));

  const handleActivate = () => {
    // NOTE: usually you will send a req with user id or something
    console.log("send ");
    const activate = userData;
  };

  const handleBlacklist = () => {
    // NOTE: usually you will send a req with user id or something
    console.log("send ");
  };
  return (
    <div className={styles.landing}>
      {/* Row 1: Back link */}
      <div className={styles.row1}>
        <Link href="/dashboard/users" className={styles.svg}>
          <ArrowLeftIcon />
        </Link>
        <p>Back to Users</p>
      </div>

      {/* Row 2: Title + Buttons */}
      <div className={styles.row2}>
        <div className={styles.title}>User Details</div>
        <div className={styles.actions}>
          <button onClick={handleBlacklist} className={styles.blacklist}>
            Blacklist User
          </button>
          <button onClick={handleActivate} className={styles.activate}>
            Activate User
          </button>
        </div>
      </div>

      <div className={styles.userCard}>
        <div className={styles.row}>
          {/* Left group */}
          <div className={styles.leftGroup}>
            <div className={styles.avatar}></div>
            <div className={styles.nameId}>
              <h1 className={styles.name}>{user?.name}</h1>
              <p className={styles.id}>{user?.id}</p>
            </div>
          </div>

          <div className={styles.divider}></div>

          {/* Middle group */}
          <div className={styles.middleGroup}>
            <h1 className={styles.tier}>User’s Tier</h1>
            <p className={styles.stars}>★★☆</p>
          </div>

          <div className={styles.divider}></div>

          {/* Right group */}
          <div className={styles.rightGroup}>
            <h1 className={styles.amount}>{formatNaira(2000000)}</h1>
            <p className={styles.bank}>{user?.company} Bank</p>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          <span className={styles.active}>General Details</span>
          <span>Documents</span>
          <span>Bank Details</span>
          <span>Loans</span>
          <span>Savings</span>
          <span>App and System</span>
        </div>
      </div>

      {/* Personal Info */}
      <div className={styles.section}>
        <h3>Personal Information</h3>
        <div className={styles.infoGrid}>
          <div>
            <p>Full Name</p>
            <span>{user?.name}</span>
          </div>
          <div>
            <p>Phone Number</p>
            <span>{user?.phone}</span>
          </div>
          <div>
            <p>Email Address</p>
            <span>{user?.email}</span>
          </div>
          <div>
            <p>BVN</p>
            <span>{user?.bvn}</span>
          </div>
          <div>
            <p>Gender</p>
            <span>{user?.gender}</span>
          </div>
          <div>
            <p>Marital Status</p>
            <span>{user?.maritalStatus}</span>
          </div>
          <div>
            <p>Children</p>
            <span>{user?.children === 0 ? "None" : user?.children}</span>
          </div>
          <div>
            <p>Type of Residence</p>
            <span>{user?.typeOfResident}</span>
          </div>
        </div>
      </div>

      {/* Education and Employment */}
      <div className={styles.section}>
        <h3>Education and Employment</h3>
        <div className={styles.infoGrid}>
          <div>
            <p>Level of Education</p>
            <span>{user?.levelOfEducation}</span>
          </div>
          <div>
            <p>Employment Status</p>
            <span>{user?.employmentStatus}</span>
          </div>
          <div>
            <p>Sector of Employment</p>
            <span>{user?.sectorOfEmployment}</span>
          </div>
          <div>
            <p>Duration of Employment</p>
            <span>{user?.durationOfEmployment}</span>
          </div>
          <div>
            <p>Office Email</p>
            <span>{user?.email}</span>
          </div>
          <div>
            <p>Monthly Income</p>
            <span>
              {formatNaira(user?.monthlyIncome[0])}- {formatNaira(user?.monthlyIncome[1])}
            </span>
          </div>
          <div>
            <p>Loan Repayment</p>
            <span>{user?.name}</span>
          </div>
        </div>
      </div>
      {/* Social media */}
      <div className={styles.section}>
        <h3>Socials</h3>
        <div className={styles.socials}>
          <div>
            <p>Twitter</p>
            <a href={user?.twitter}>@{user?.name}</a>
          </div>
          <div>
            <p>Facebook</p>
            <a href={user?.facebook}>{user?.name}</a>
          </div>
          <div>
            <p>Instagram</p>
            <a href={user?.instagram}>{user?.name}</a>
          </div>
        </div>
      </div>
      {/* Social media */}
      <div className={styles.section}>
        <h3>Guarantor</h3>
        <div className={styles.socials}>
          <div>
            <p>full Name</p>
            <span>{user?.guarantor.fullName}</span>
          </div>
          <div>
            <p>Phone Number</p>
            <span>{user?.guarantor.number}</span>
          </div>
          <div>
            <p>Email Address</p>
            <span>{user?.guarantor.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
