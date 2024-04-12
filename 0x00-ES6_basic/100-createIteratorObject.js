export default function createIteratorObject(report) {
  const values = Object.values(report.allEmployees);
  const allEmployeesList = [];
  for (const value of values) {
    allEmployeesList.push(...value);
  }
  return allEmployeesList;
}
