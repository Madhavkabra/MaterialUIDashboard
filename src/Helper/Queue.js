class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(element) {
    this.queue.push(element)
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  getRandomlyChangingQueue() {
    setInterval(this.enqueue(Math.random() * 1000), 1000)
    setTimeout(setInterval(this.dequeue(), 1000), 6000)
  }
}

export default Queue