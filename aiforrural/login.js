(function () {
  'use strict'

    //form validation

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

    //View Password via eye icon

    const togglePassword = document.querySelector('#togglePassword');

    const password = document.querySelector('#Password');

    togglePassword.addEventListener('click', function (e) {

    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';

    password.setAttribute('type', type);
    
    this.classList.toggle('fa-eye-slash');
});