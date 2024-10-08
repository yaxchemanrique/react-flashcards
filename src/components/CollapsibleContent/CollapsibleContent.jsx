import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import styles from "./CollapsibleContent.module.css";

function CollapsibleContent({ title, tag, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div>
      <button
        onClick={() => setIsCollapsed((current) => !current)}
        className={styles.collapseButton}
      >
        <div className={styles.titleTextContainer}>
          <span className={styles.title}>{title}</span>
          <span className={styles.tag}>{tag}</span>
        </div>
        <div className={styles.iconContainer}>
          {isCollapsed ? <ChevronDown /> : <ChevronUp />}
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
