function hitungBarang(kualitas, q) {
    let total;
    let potongan;
    let totalBayar;
    if (kualitas === "A") {
      if (q > 13) {
        total = 4500 * q;
        potongan = 231 * q;
        totalBayar = total - potongan;
        return `Barang dengan kualitas A\nTotal harga barang : ${total}\n Potongan : ${potongan}\n Total yang harus dibayar ${totalBayar}`;
      }
      return "Barang dengan kualitas A\nTotal harga Bayar :" + 4500 * q;
    } else if (kualitas === "B") {
      if (q > 7) {
        total = 5330 * q;
        potongan = total * (23 / 100);
        totalBayar = total - potongan;
        return `Barang dengan kualitas B\nTotal harga barang : ${total}\n Potongan : ${potongan}\n Total yang harus dibayar ${totalBayar}`;
      }
      return console.log(5330 * q);
    } else if (kualitas === "C") {
      return "Barang dengan Kualitas C\n Total yang harus dibayar : " + 8653 * q;
    }
  }
  console.log(hitungBarang("A", 14));
  console.log(hitungBarang("A", 13));
  console.log(hitungBarang("B", 8));
  console.log(hitungBarang("C", 5));
  