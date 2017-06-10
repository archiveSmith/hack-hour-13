
//HEAPS ALGORITHIM
function eachPermutation(arr, callback){
  const recurse = (index) =>{
    if(index === arr.length){
      callaback('basecase:')
      return callback(arr);
    }
    for(var i = index; i <arr.length; i ++){
      console.log('index', index, '-----------', 'i', i);
        swap(arr,index,j);
        recurse(index + 1);
        swap(arr,index.j);
    }
  }
  recurse(0);
}

function swap(){

}