function arraySort(arr) {
    let array = arr.length;
    for (let i = 0; i < array - 1; i++) {
      for (let j = 0; j < array - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  let a = [20, 12, 35, 11, 17, 9, 58, 23, 69, 21];
  console.log(a);
  
  console.log(arraySort(a));
  