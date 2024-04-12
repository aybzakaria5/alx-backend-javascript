export default function iterateThroughObject(reportWithIterator) {
  let result = [];
  for (let item of reportWithIterator) {
    result.push(item);
  }
  return result.join(" | ");


}