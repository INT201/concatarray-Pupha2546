const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
  // if (array1 == null && array2 == null) {
  //   return undefined
  // }
  // else if (array1 == undefined && array2 == undefined) {
  //   return undefined
  // }
  // else if (array1.length == 0 && array2.length == 0) {
  //   return 'empty array'
  // }
  // else {
  //   if (array1 !== ) {
      
  //   }
  // }
  if((array1 == null || array1 == undefined)&& (array2 == null ||array2 == undefined)){
    return undefined
  }
  else{
    if(array1 ==null || array1 == undefined){
      return array2
    }
    else if(array2==null || array2 == undefined){
      return array1
    }
    else{
      return array1.concat(array2)
    }
  }
}
module.exports = concatArray
