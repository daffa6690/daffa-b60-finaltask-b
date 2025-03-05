function formateDate(a) {
  // Konversi ke objek Date
  let date = new Date(a);

  // Array nama hari dan bulan
  let bulan = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  // Ambil komponen tanggal
  let tanggal = date.getDate();
  let namaBulan = bulan[date.getMonth()];
  let tahun = date.getFullYear();

  // Tampilkan hasil
  let hasil = `${tanggal} ${namaBulan} ${tahun}`;
  return hasil;
}
function editTime(a) {
  let date = new Date(a);

  if (isNaN(date.getTime())) {
    return ""; // Jika tanggal tidak valid, kembalikan string kosong
  }

  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0"); // Tambahkan 0 jika perlu
  let day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
module.exports = {
  formateDate,
  editTime,
};
