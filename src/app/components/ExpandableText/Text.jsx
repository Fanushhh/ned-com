'use client'
import React from "react";
import styles from "./Text.module.css";
export const ExpandableText = ({ text }) => {
    const [isExpandable, setIsExpandable] = React.useState(false);
  const updatedPropertyDescription = text
    .split(/\.(?![()])/)
    .join(".<br /><br />");
  return (
    <div className={styles.textContainer}>
    <p className={`${styles.expandedText} ${isExpandable ? styles.expanded : ''}`} dangerouslySetInnerHTML={{ __html: updatedPropertyDescription }}></p>
    <button className={styles.expandButton} onClick={() => setIsExpandable(!isExpandable)}>{isExpandable ? "Show less" : "Show more"}</button>
    </div>
  );
};
