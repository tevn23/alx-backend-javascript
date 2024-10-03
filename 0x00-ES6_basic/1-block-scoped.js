export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // This task is now block-scoped
    const task2 = false; // This task2 is also block-scoped
  }

  return [task, task2];
}
