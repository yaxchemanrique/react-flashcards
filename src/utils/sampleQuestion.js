function sampleData(arr) {
  const max = arr.length;
  const randNum = randomIndex(max);
  return arr[randNum]
}

function randomIndex(max) {
  return Math.trunc(max * Math.random()) 
}

export function randomizeArray(arr) {
  let arrCopy = [...arr];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const randIndex = randomIndex(arrCopy.length)
    result.push(arrCopy[randIndex]);
    arrCopy.splice(randIndex, 1)
  }
  return result
}