const swap = (arr, indexOne, indexTwo) => {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;
};

const quicksort = (array, leftBound = 0, rightBound = array.length - 1) => {
    if (leftBound < rightBound) {
      const pivotIndex = partition(array, leftBound, rightBound);
      quicksort(array, leftBound, pivotIndex - 1);
      quicksort(array, pivotIndex, rightBound);
    }
    return array;
  };

  const partition = (array, leftIndex, rightIndex) => {
    const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
    while (leftIndex <= rightIndex) {
      while (array[leftIndex] < pivot) {
        leftIndex++;
      }
      while (array[rightIndex] > pivot) {
        rightIndex--;
      }
      if (leftIndex <= rightIndex) {
        swap(array, leftIndex, rightIndex);
        leftIndex++;
        rightIndex--;
      }
    }
    return leftIndex;
  }
  
  module.exports = {
    quicksort,
    partition
  };
  
/* TEST IT */
//UNCOMENT 1
/* const randomize = () => Math.floor(Math.random() * 40);

let numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(randomize());
}

console.log('Before quicksort:', numbers);
const sorted = quicksort(numbers);
console.log('After  quicksort:', sorted); */


//UNCOMENT 2
/* let numbers = [];
let max = 1000000;
for (let i = max; i > 0; i--) {
  numbers.push(i);
}


console.log(`Before  quicksort number @ index      0 = ${numbers[0]}`);
console.log(`Before  quicksort number @ index ${max/4} = ${numbers[max/4]}`);
console.log(`Before  quicksort number @ index ${max/2} = ${numbers[max/2]}`);
console.log(`Before  quicksort number @ index ${3*max/4} = ${numbers[3*max/4]}`);
console.log(`Before  quicksort number @ index ${max-1} = ${numbers[max - 1]}`);
const sorted = quicksort(numbers);
console.log(`---`);
console.log(`After   quicksort number @ index      0 = ${sorted[0]}`);
console.log(`After   quicksort number @ index ${max/4-1} = ${sorted[max/4-1]}`);
console.log(`After   quicksort number @ index ${max/2-1} = ${sorted[max/2-1]}`);
console.log(`After   quicksort number @ index ${3*max/4-1} = ${sorted[3*max/4-1]}`);
console.log(`After   quicksort number @ index ${max-1} = ${sorted[max - 1]}`);

 */