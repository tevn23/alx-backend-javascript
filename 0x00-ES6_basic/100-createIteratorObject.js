export default function createIteratorObject(report) {
  const employees = report.allEmployees;

  // Use a generator function to yield each employee
  function* employeeIterator() {
    for (const department in employees) {
      for (const employee of employees[department]) {
        yield employee;
      }
    }
  }

  return employeeIterator();
}

