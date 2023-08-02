
function highestMarks(arg) {
  return arg.reduce(function (p, v) {
    return ( p > v ? p : v );
  });
}

let marks = [ 205,450,150,250]
console.log(highestMarks(marks))
