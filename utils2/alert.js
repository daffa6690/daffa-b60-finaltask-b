function sendAlert(message) {
  Swal.fire({
    title: "Oops!",
    text: message,
    icon: "error",
  });
}

function registerError(message){
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
}



const alertHapus = () => {
  event.preventDefault();
  const form = event.target.form;
  Swal.fire({
    title: "Apa kamu ingin menghapus?",
    text: "Setelah dihapus data tidak dapat dikembalikan",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus",
  }).then((result) => {
    if (result.isConfirmed) {
      form.submit();
    }
  });
};

// const alertDelete = Swal.mixin({
//   customClass: {
//     confirmButton: "btn btn-success",
//     cancelButton: "btn btn-danger"
//   },
//   buttonsStyling: false
// });
// alertDelete.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonText: "Yes, delete it!",
//   cancelButtonText: "No, cancel!",
//   reverseButtons: true
// }).then((result) => {
//   if (result.isConfirmed) {
//     alertDelete.fire({
//       title: "Deleted!",
//       text: "Your file has been deleted.",
//       icon: "success"
//     });
//   } else if (
//     /* Read more about handling dismissals below */
//     result.dismiss === Swal.DismissReason.cancel
//   ) {
//     alertDelete.fire({
//       title: "Cancelled",
//       text: "Your imaginary file is safe :)",
//       icon: "error"
//     });
//   }
// });
