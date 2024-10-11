function addToArray(arr,...args){
    if(!arr||!Array.isArray(arr))
        return null 
    // for(const arg of args){
    //     arr.push(arg)
    // }
    // return arr
    return [...arr,...args]
}

let a=[1]

console.log(addToArray(a,2,3,4))

function merge(first,second){
    if(first.length!==second.length){
        return null
    }
    let result=[]
    for(let i=0;i<first.length;i++){
        result.push(first[i])
        result.push(second[i])
    }

return result

}

console.log(merge([1],[1,2]))
console.log(merge([1,3],[2,4]))