Swal.mixin({
    timer: 6000,
    timerProgressBar: true,
    background: '#eee',
    backdrop: `
      rgba(0,0,123,0.4)
    `
}).bindClickHandler('data-swal-toast-template');
Swal.fire({
    icon: 'success',
    title: '¡ BIENVENIDO !',
    showConfirmButton: false,
    timer: 1000,
    showConfirmButton: false,
    width: 370,
    position: 'top-end',
    color: 'white',
    padding: '3em',
    background: '#fff',
});
