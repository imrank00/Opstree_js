function customMap(arr, callback){
    if(!Array.isArray(arr)){
      console.error('Error: The Provided argument is not an array.');
      return;
    }
    const mappedArray =[];
  
    for(let i= 0;i<arr.length; i++){
      mappedArray.push(callback(arr[i],i,arr));
    }
    return mappedArray;
}
    const numbers = [1,2,3,4,5];
    const squaredNumbers = customMap(numbers, function(element){
      return element **2;
    });
  
    console.log(squaredNumbers);