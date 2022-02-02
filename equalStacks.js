//Hackerrank - Equal Stacks Question
/*
https://www.hackerrank.com/challenges/equal-stacks/problem
*/


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
}

function fillStack(stack, arr){
    let sum = 0;
    for(let i = arr.length -1; i >= 0; i--){
        sum += arr[i];
        stack.push(sum);
    }
}

function equalStacks(h1, h2, h3) {  
    const stack1 = new Stack();
    const stack2 = new Stack();
    const stack3 = new Stack();
    
    fillStack(stack1, h1);
    fillStack(stack2, h2);
    fillStack(stack3, h3);
    
    let totalHeight = 0;
    
    while(!stack1.isEmpty() && !stack2.isEmpty() && !stack3.isEmpty()){
        let height1 = stack1.peek();
        let height2 = stack2.peek();
        let height3 = stack3.peek();
        
        if(height1 === height2 && height1 === height3){
            totalHeight = height1;
            break;
        }
        
        if(height1 >= height2 && height1 >= height3){
            stack1.pop();
        }
        
        if(height2 >= height1 && height2 >= height3){
            stack2.pop();
        }
        
        if(height3 >= height1 && height3 >= height2){
            stack3.pop();
        }
    }
    
    return totalHeight;
}




