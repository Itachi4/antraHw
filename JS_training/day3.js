Array.prototype.myFilter = function(callback) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
      const result = callback(this[i], i , this);
      if(result)
        res.push(this[i]);
    }
    return res;
  }
  
  const numbers = [1, 2, 3, 4, 5,6,7,8,18,14,16,17,19];
  const evenNum = numbers.myFilter((number) => number % 2 === 0);
  
  console.log("The myFilter Function returns", evenNum);


  /* -------------------------------------------------------------------------------*/
                                //MAP
  /* -------------------------------------------------------------------------------*/

Array.prototype.myMap = function(callback){
    const res = []
    for (let i=0; i<this.length ;i++){
        res.push(callback(this[i],i,this));
    }

    return res;
}

const mapResult = numbers.myMap(num => num + 1);
console.log('myMap function returns ', mapResult);


 /* -------------------------------------------------------------------------------*/
                                //includes
  /* -------------------------------------------------------------------------------*/

  Array.prototype.myIncludes = function(ele){
        for (let i = 0; i < this.length; i++) {
            if (this.hasOwnProperty(i) && this[i] === ele) {
            return true;
            }
        }
        return false;
    }

    const check = numbers.myIncludes(20)
    console.log(check);

/* -------------------------------------------------------------------------------*/
                                //indexOf
  /* -------------------------------------------------------------------------------*/

Array.prototype.myIndexOf = function(ele){
    for (let i = 0; i < this.length; i++) {
        if (this[i] === ele) {
          return i; 
        }
      }
      return -1;
}

const checkIndex = numbers.myIndexOf(8)
console.log(checkIndex);

/* -------------------------------------------------------------------------------*/
                                //reduce
  /* -------------------------------------------------------------------------------*/

  Array.prototype.myReduce = function(callback , init){
    let acc = init;
    for (let i = 0; i < this.length; i++) {
        acc = callback(acc,this[i], i , this);
    }
    return acc;
  }

const reduceResult = numbers.myReduce((acc, x) => acc + x, 100);
console.log("reduce:", reduceResult);


/* -------------------------------------------------------------------------------*/
                                //slice
  /* -------------------------------------------------------------------------------*/

  Array.prototype.mySlice = function(startIndex, endIndex) {
    const result = [];
    let start = startIndex;
    let end = endIndex;
  
    for (let i = start; i < end; i++) {
      result.push(this[i]);
    }
  
    return result;
  };

const slice = numbers.mySlice(3,8);
console.log(slice);
  


/* -------------------------------------------------------------------------------*/
                                //mySplice
  /* -------------------------------------------------------------------------------*/

Array.prototype.mySplice = function (start, del, ...args) {
   
    const left = this.slice(0, start);
    const right = this.slice(start + del);
    const removedEle = this.slice(start, start + del);

    this.length = 0;

    const newArray = left.concat(args, right);
    for (let i = 0; i < newArray.length; i++) {
        this[i] = newArray[i];
    }
    
    return removedEle;
}