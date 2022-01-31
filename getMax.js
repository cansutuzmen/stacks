//Hackerrank getMax Question

function getMax(operations) {
    let stack = [];
    let trackedList = [];
    
    for(let i = 0; i < operations.length; i++){
        const operation = operations[i].charAt(0);
        if(operation === '1'){
            let opArr = operations[i].split(' ');
            stack.push(opArr[1]);
        }
        
        if(operation === '2'){
            stack.pop();
        }
        
        if(operation === '3'){
            trackedList.push(Math.max(...stack));
        }
    }
    
    return trackedList;
}
