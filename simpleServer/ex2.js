function checkDivisible(n,divisor){

    if(n%divisor){
        return false
    }else{
        return true
    }

}
console.log(checkDivisible(8,2))
console.log(checkDivisible(9,2))

function stringComparison(x,y){
    if(x.length!=y.length){
        return -1
    }
    let count=0
    for(let i=0;i<x.length;i++){
        if(x[i]!==y[i]){
            count++
        }
    }
    return count
}


console.log(stringComparison('eu','eu'))
console.log(stringComparison('toma','e mega prost'))