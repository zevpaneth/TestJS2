
function Mission1(array){
    return array.filter(number => number % 2 === 0);
}

function Mission2(string){
    const array = string.split(" ");
    return array.filter((name) => name.length === 4).length;
}
function Mission3(array){
    return [].concat(...array);
}

function Mission5(keyArr, valueArr){
    const obj = {};

    if (keyArr.length === valueArr.length){
        for (let i = 0; i < keyArr.length; i++){
            obj[keyArr[i]] = valueArr[i];
        }
        return obj;
    }
    return {"the arrays are": "not even"}
}

module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission5,
}