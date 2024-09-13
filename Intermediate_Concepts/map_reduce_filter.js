function general_fn(arr, i) {
  var ans = [];
  ans[i] = arr[i] + 1;
  return ans[i];
};

var arr = [1, 2, 3];

function map(arr) {
    var n = arr.length;
    for(var i = 0; i < n;i++) {
        arr[i] = general_fn(arr, i);
    };

    return arr;
};

console.log(map(arr));


