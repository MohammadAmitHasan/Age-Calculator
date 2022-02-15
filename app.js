const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
    // Take user input
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

        // Display the day of birth
        document.getElementById('birth-day').innerText = inputDate.toLocaleDateString(undefined, { weekday: 'long' });

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

// Display the results
function displayResult(bDate, bMonth, bYear) {
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}

// Check leap year
function leapChecker(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    }
    else {
        months[1] = 28;
    }
}

// Clear the screen
document.getElementById('refresh').addEventListener('click', function () {
    document.getElementById("date-input").value = '';
    document.getElementById('result-section').style.display = 'none';
});