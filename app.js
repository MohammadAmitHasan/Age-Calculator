// function calculateAge(birthDateInput) {
//     const currentDate = new Date;
//     const birthDate = new Date(birthDateInput);
//     const age = currentDate - birthDate;
//     const monthAge = age / 1000 / 60 / 60 / 24 / 365;
//     console.log(monthAge);
//     console.log(age / 31557600000);
//     // 31557600000
// }
// document.getElementById('calculate-btn').addEventListener('click', function () {
//     const birthDate = document.getElementById('birth-date');
//     if (birthDate.value != '') {
//         calculateAge(birthDate.value);
//     }
//     else {
//         alert('Please.! Provide the birth date properly')
//     }
// });


// Testing
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
    let inputDate = new Date(document.getElementById("date-input").value);
    // Input validation
    if (inputDate == 'Invalid Date') {
        alert('Please, Provide date properly');
    }
    else {
        // Get current date
        let today = new Date();
        // Display current date
        document.getElementById('current-date').innerText = today.toDateString();

        let birthMonth, birthDate, birthYear;
        let birthDetails = {
            date: inputDate.getDate(),
            month: inputDate.getMonth() + 1,
            year: inputDate.getFullYear()
        }
        let currentYear = today.getFullYear();
        let currentMonth = today.getMonth() + 1;
        let currentDate = today.getDate();

        leapChecker(currentYear);

        if (
            birthDetails.year > currentYear ||
            (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
            (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
        ) {
            alert("Not Born Yet");
            displayResult("-", "-", "-");
            return;
        }

        birthYear = currentYear - birthDetails.year;

        if (currentMonth >= birthDetails.month) {
            birthMonth = currentMonth - birthDetails.month;
        }
        else {
            birthYear--;
            birthMonth = 12 + currentMonth - birthDetails.month;
        }

        if (currentDate >= birthDetails.date) {
            birthDate = currentDate - birthDetails.date;
        }
        else {
            birthMonth--;
            let days = months[currentMonth - 2];
            birthDate = days + currentDate - birthDetails.date;
            if (birthMonth < 0) {
                birthMonth = 11;
                birthYear--;
            }
        }
        displayResult(birthDate, birthMonth, birthYear);
        document.getElementById('result-section').style.display = 'block';
    }

}

function displayResult(bDate, bMonth, bYear) {
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}

function leapChecker(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    }
    else {
        months[1] = 28;
    }
}