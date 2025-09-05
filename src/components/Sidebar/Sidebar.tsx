import React from "react";
import styles from "./Sidebar.module.scss";
import SidebarItem from "./SidebarItem";
import { customersLinks, businessLinks, settingsLinks } from "./SidebarList";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <p className={styles.section_title}>Customers</p>
      {customersLinks.map((links) => (
        <SidebarItem
          key={links.href}
          icon={links.icon}
          label={links.label}
          href={`/dashboard${links.href}`}
        />
      ))}
      <p className={styles.section_title}>Business</p>
      {businessLinks.map((links) => (
        <SidebarItem
          key={links.href}
          icon={links.icon}
          label={links.label}
          href={`/dashboard${links.href}`}
        />
      ))}
      <p className={styles.section_title}>Settings</p>
      {settingsLinks.map((links) => (
        <SidebarItem
          key={links.href}
          icon={links.icon}
          label={links.label}
          href={`/dashboard${links.href}`}
        />
      ))}
    </div>
  );
};

export default Sidebar;
