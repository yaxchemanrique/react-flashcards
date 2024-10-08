export function createTopicsArr(arr) {
  let topicsArray = [];
  arr.forEach(element => {
    topicsArray.push(element.topic)
  });
  const set = new Set(topicsArray)
  return [...set]
}

export function createTopicsObj(arr) {
  const topicsArr = createTopicsArr(arr);
  let topicsObj = {}
  topicsArr.forEach(topic => {
    const noSpaceString = topic.replaceAll(" ", "-");
    const lowercaseString = noSpaceString.toLowerCase();
    topicsObj[lowercaseString] = topic;
  });
  return topicsObj;
}