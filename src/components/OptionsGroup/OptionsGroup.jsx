import { useContext } from "react";
import { TopicContext } from "../../contexts/TopicProvider.jsx";

import styles from "./OptionsGroup.module.css";

function OptionsGroup() {
  const { topics, topicsKeysArray, currentTopic, changeTopic } =
    useContext(TopicContext);

  return (
    <fieldset className={styles.fieldset}>
      {topicsKeysArray.map((key) => (
        <div className={styles.radioGroup} key={key}>
          <input
            type="radio"
            name='topics'
            value={key}
            id={key}
            checked={key === currentTopic}
            onChange={(e) => changeTopic(e.target.value)}
          />
          <label htmlFor={key}>{topics[key]}</label>
        </div>
      ))}
    </fieldset>
  );
}

export default OptionsGroup;
