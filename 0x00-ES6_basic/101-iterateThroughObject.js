export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Iterate through the iterator and collect employee names
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  // Join the names with a pipe character
  return employeeNames.join(' | ');
}

