function queueTime(customers, n) {
    if (n <= 0) return 0;

        let time = new Array(n).fill(0);

        for (let t of customers) {
            let idx = time.indexOf(Math.min(...time))
            time[idx] += t;
        }
        return Math.max(...time);
}

console.log(queueTime([], 1));
console.log(queueTime([1,2,3,4], 1));
console.log(queueTime([10,2,3,3], 2));
console.log(queueTime([2,3,10], 2));
console.log(queueTime([2,2,3,3,4,4], 2));
console.log(queueTime([2,2,3,5,4,4], 2));
console.log(queueTime([1,2,3,4,5], 100));


/* There is a queue for the self-checkout tills at the supermarket.
Your task is write a function to calculate the total time required for all the customers to check out!

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
*/