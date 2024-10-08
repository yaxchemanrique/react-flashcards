import { useContext } from "react";
import { TopicContext } from "../../contexts/TopicProvider.jsx";

import styles from "./OptionsGroup.module.css";

function OptionsGroup() {
  const { topics, updateTopics, numberOfQuestionsByTopic } = useContext(TopicContext);

  function handleChange(e) {
    const topicToUpdateIndex = topics.findIndex(element => element.id === e.target.value)
    const updatedTopic = {
      ...topics[topicToUpdateIndex],
      isChecked: e.target.checked,
    }
    let nextTopics = [...topics]
    nextTopics.splice(topicToUpdateIndex, 1, updatedTopic);
    const selectedTopics = nextTopics.filter(element => element.isChecked)
    if(selectedTopics.length !== 0) {
      updateTopics(nextTopics);
    }
  }

  return (
    <fieldset className={styles.fieldset}>
      {topics.map(({id, label, isChecked}) => (
        <div className={styles.radioGroup} key={id}>
          <input
            type="checkbox"
            name='topics'
            value={id}
            id={id}
            checked={isChecked}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor={id}>{label} ({numberOfQuestionsByTopic[id]})</label>
        </div>
      ))}
    </fieldset>
  );
}

export default OptionsGroup;
