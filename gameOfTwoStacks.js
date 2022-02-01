//HackerRank - Game of Two Stacks Question

class Stack {
    constructor(){
        this.array = [];
    }
    peek() {
        return this.array[this.array.length - 1];
    }
    push(value) {
        this.array.push(value);
        return this;
    }
    pop() {
        this.array.pop();
        return this;
    } 
    isEmpty(){
        return !this.array.length ? true : false;
    }
    size(){
        return this.array.length;
    }
}

function fillStack(array, stack, maxSum){
    let sum = 0;
    for(let i=0; i< array.length; i++){
        sum += array[i];
        if(sum <= maxSum){
            stack.push(sum);
        }
    }
}
function twoStacks(maxSum, a, b) {
    const stackA = new Stack();
    const stackB = new Stack();
    
    fillStack(a, stackA, maxSum);
    fillStack(b, stackB, maxSum);
    
    const lengthA = stackA.size();
    const lengthB = stackB.size();
    
    let count = Math.max(lengthA, lengthB);
    let indexB = 0;
    
    for(let indexA = lengthA - 1; indexA >= 0; indexA--){
        const currentSum = stackA.array[indexA];
        while(indexB < lengthB && currentSum + stackB.array[indexB] <= maxSum){
            indexB++;
        }
        const newCount = indexA + indexB + 1;
        count = Math.max(count, newCount); 
    }
    
    return count;
}
