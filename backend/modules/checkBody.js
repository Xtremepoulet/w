

const checkBody = (object, array) => {

    let same_number = false;

    let key_array = [];    

    for(let k in object){
        if(array.includes(k) && object[k] != ''){
            key_array.push(k)
        }
    }


    if(array.length === key_array.length){
        same_number = true;
    }else {
        same_number = false
    }


    if(same_number){
        return true; 
    }else {
        return false
    }
}


module.exports = { checkBody };