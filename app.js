function calculateAge(birthDateInput) {
    const currentDate = new Date;
    const birthDate = new Date(birthDateInput);
    const age = currentDate - birthDate;
    const monthAge = age / 1000 / 60 / 60 / 24 / 365;
    console.log(monthAge);
    console.log(age / 31557600000);
    // 31557600000
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    const birthDate = document.getElementById('birth-date');
    if (birthDate.value != '') {
        calculateAge(birthDate.value);
    }
    else {
        alert('Please.! Provide the birth date properly')
    }
});