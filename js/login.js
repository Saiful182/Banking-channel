document.getElementById('login-submit').addEventListener('click', function () {
    const userEmailGet = document.getElementById('user-email')
    const userEmail = userEmailGet.value;
    const userPasswordGet = document.getElementById('user-password')
    const userPassword = userPasswordGet.value;

    if (userEmail == 'admin@gmail.com' && userPassword == '1234') {
        window.location.href = 'banking.html'
    }
})
