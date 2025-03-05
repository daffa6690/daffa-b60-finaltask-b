function forI(p) {
    if (p % 2 === 0) {
      return "Harus memasukkan angka ganjil";
    }
    let tengah = p / 2;
    let baris = "";
    for (let i = 0; i < p; i++) {
      for (let j = 0; j < p; j++) {
        if (i === Math.floor(tengah) && j == Math.floor(tengah)) {
          baris += "#";
        } else if (
          i + j === 0 ||
          j === Math.floor(tengah) ||
          i === Math.floor(tengah) ||
          (i === 0 && j === p - 1) ||
          (i === p - 1 && j === 0) ||
          (i === p - 1 && j === p - 1)
        ) {
          baris += "*";
        } else {
          baris += "#";
        }
      }
      baris += "\n";
    }
    return baris;
  }
  console.log(forI(6));
  console.log(forI(5));
  console.log(forI(7));
  console.log(forI(9));
  