// task 2 
const friends = ['shakib', 'roshan', 'rokib', 'shuvo', 'merazul', 'kaosar', 'ariful'];
function evenfriends(friends) {
    let evenLength = [];
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            // console.log(friend) ;
            evenLength.push(friend)
        }
    }
    return evenLength;
}

const even = evenfriends(friends);
// console.log(even)
// console.log(evenLength)





// task 3 
function squareSumAvarage(numbers) {
    // console.log(numbers);
    let squareValue = [];
    let sum = 0;
    for (const num of numbers) {
        // console.log(num)
        const square = num * num;
        // console.log(square);
        squareValue.push(square);
        sum = sum + square;

    }
    const length = numbers.length;
    const average = sum / length;
    // console.log(average)
    return average;
    //     console.log(squareValue)
    //     console.log(sum)
}
const numbers = [2, 3, 4, 5];
const result = squareSumAvarage(numbers);
// console.log(result)



// task 4 

const sogkha = [3, 4, 53,3443546677];
const sogkha2 = [544, 54, 35434];

function maxValue(sogkha, sogkha2) {
    const jounsogkha = [...sogkha, ...sogkha2]
    const max = Math.max(...jounsogkha);
    return max ;
}
const max = maxValue(sogkha, sogkha2);
// console.log(max);

