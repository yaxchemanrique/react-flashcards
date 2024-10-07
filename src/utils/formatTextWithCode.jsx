function formatTextWithCode(text, styles) {
  const parts = [];
  const inlineCodeRegex = /`([^`]+)`/g;
  const blockCodeRegex = /```([^`]+)```/g;

  let remainingText = text.split(blockCodeRegex);

  for (let i = 0; i < remainingText.length; i++) {
    if (i % 2 === 1) {
      parts.push(
        <pre key={i} className={styles.blockCode}>
          <code>{remainingText[i].trim()}</code>
        </pre>
      );
    } else {
      let inlineParts = remainingText[i].split(inlineCodeRegex);
      inlineParts.forEach((part, index) => {
        if (index % 2 === 1) {
          parts.push(
            <code key={`${i}-${index}`} className={styles.inlineCode}>
              {part}
            </code>
          );
        } else {
          parts.push(<span key={`${i}-${index}`}>{part}</span>);
        }
      });
    }
  }

  return parts;
}

export default formatTextWithCode;