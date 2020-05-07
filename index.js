function fibonacci_series(n) {
  var initial_array = [0, 1];
  for (var i = 1; i < n; i++) {
    // Get length of array
    var arr_length = initial_array.length;

    // Get the last value in the array
    var last_value = initial_array[arr_length - 1];

    // Get second to last value in the array
    var sec_to_value = initial_array[arr_length - 2];

    // Add values to get next value
    var next_value = last_value + sec_to_value;

    // Add the next value to the initial array
    initial_array.push(next_value);
  }
  return initial_array;
}
console.log(fibonacci_series(9));