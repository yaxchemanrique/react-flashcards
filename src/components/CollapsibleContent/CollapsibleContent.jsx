import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import styles from './CollapsibleContent.module.css'

function CollapsibleContent({ title, tag, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div>
      <div className={styles.titleContainer} style={{ display: "flex", justifyContent: "space-between" }}>
        <div className={styles.titleTextContainer}>
          <span className={styles.title}>{title}</span>
          <span className={styles.tag}>{tag}</span>
        </div>
        <button className={styles.button} onClick={() => setIsCollapsed((current) => !current)}>
          {isCollapsed ? <ChevronDown /> : <ChevronUp />}
        </button>
      </div>
      <div 
      className={styles.collapsedContent}
        style={{
          maxHeight: isCollapsed ? 0 : "100vh"
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default CollapsibleContent;
