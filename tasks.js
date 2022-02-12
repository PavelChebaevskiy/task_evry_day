//Task: array => newArray

function partsSums(ls) {
  let result = [];
  if (ls.length == 0){
    result.push(0);
  } else {
      while (true) {
      result.push(ls.reduce((a,b) => a + b))
      ls.shift();
      if (ls.length == 0){
        result.push(0);
        break;
      }
    }
  }
  return console.log(result)
}
partsSums([]) //[21, 20, 18, 15, 11, 6, 0] // [0]
