const LinkedList = require("./single_linked_list");

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
    } else {
      throw new Error("Queue is full!");
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      return data;
    } else {
      throw new Error("Queue is empty!");
    }
  }
}

module.exports = Queue;

/* TEST IT */
/* 
const load = flights => {
    const runway = new Queue(3);
    flights.forEach(flight => {
      try {
        runway.enqueue(flight);
        console.log(`${flight} taxi to runway.`);
      } catch(e) {
        console.log('Runway full!');
      }
    });
    
   return runway;
};

const clear = runway => {
  while(runway.isEmpty() === false) {
    const cleared = runway.dequeue()
    console.log('\nFlights wait...\n');
    console.log(`${cleared}, is cleared for takeoff!\n${cleared} in air.`);
  }

  console.log('\nAll planes took off, runway clear.');
};

const runway = {load, clear}
const flights = [
    'Botswana Bird flight #345',
    'Singapore Skies flight #890',
    'Mexico Mirage flight #234',
    'Greenland Flying Seals flight #567'
  ];
  
  const departing = runway.load(flights);
  runway.clear(departing); */