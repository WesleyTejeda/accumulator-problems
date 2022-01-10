const threeOdds = (num1, num2) => {
    let numArr = [];
    for(let i = num1; i < num2; i++){
        if(i % 2 == 1){
            numArr.push(i);
        }
    }
    console.log(numArr)
    if(numArr.length >= 3){
        return true;
    } else {
        return false;
    }
}

console.log(threeOdds(0,6));