import { useState } from "react";
import { ChevronDown } from "react-feather";
import styles from "./CollapsibleContent.module.css";

function CollapsibleContent({ title, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div>
      <button
        onClick={() => setIsCollapsed((current) => !current)}
        className={styles.collapseButton}
      >
        <div className={styles.titleTextContainer}>
          <span className={styles.title}>{title}</span>
        </div>
        <div className={`${styles.iconContainer} ${!isCollapsed ? styles.rotate : ''}`}>
          <ChevronDown />
        </div>
      </button>
      <div
        className={styles.collapsedContent}
        style={{
          maxHeight: isCollapsed ? 0 : "100vh",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default CollapsibleContent;
