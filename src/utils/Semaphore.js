export default class Semaphore {
  constructor(maxCount) {
    this.maxCount = maxCount; // Maximum number of parallel tasks
    this.currentCount = 0; // Current count of tasks being executed
    this.queue = []; // Queue of waiting tasks
  }

  // Acquires a semaphore permit, waiting if none are available
  async acquire() {
    if (this.currentCount < this.maxCount) {
      this.currentCount++;
      return; // Immediately acquire if space is available
    }

    // Wait in queue if no permits are available
    return new Promise((resolve) => {
      this.queue.push(resolve);
    });
  }

  // Releases a semaphore permit, allowing waiting tasks to proceed
  release() {
    if (this.queue.length > 0) {
      const next = this.queue.shift(); // Get the next waiting task
      next(); // Resolve the promise, allowing the task to run
    } else {
      this.currentCount--; // Decrement count if no tasks are waiting
    }
  }
}
