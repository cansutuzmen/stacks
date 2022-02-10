//Hackerrank - Balanced Brackets Question
/*
https://www.hackerrank.com/challenges/balanced-brackets/problem
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

function createBracketPairs(){
    return {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
}

function isBalanced(s) {
    const stack = new Stack();
    
    const bracketPairs = createBracketPairs();
    const rightBrackets = Object.values(bracketPairs);
    
    const brackets = s.split('');
    
    for(let i = 0; i < brackets.length; i++){
        if(rightBrackets.includes(brackets[i])){
            if(brackets[i] === stack.peek()){
                stack.pop();
            }else{
                return 'NO';
            }
        }
        if(bracketPairs[brackets[i]]){
            stack.push(bracketPairs[brackets[i]]);
        }
    }
     
    return stack.isEmpty() ? 'YES' : 'NO';
}


