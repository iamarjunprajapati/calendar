const now = new Date();
const year = now.getFullYear(); // Get the current year (e.g., 2024)
const month = now.getMonth();
let elementDays = document.querySelector('#days');
let elementMonth = document.querySelector('#month');
let elementDate = document.querySelector('#date');
let elementDates = document.querySelector('#dates');
const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
let months = ['January', 'February', 'March', 'April', 'May', "June", "July", "August", 'September', 'October', 'November', 'December'];

elementMonth.innerText = months[month];
elementDate.innerText = now.toString().split(' ').slice(0, 4).join(" ");


days.forEach((day) => {
    let div = document.createElement('div');
    div.innerText = day;
    div.classList.add('w-[60px]', 'flex', 'justify-center', 'items-center');
    elementDays.append(div);
});

// getting first day
let firstDay = new Date(year, month, 1).getDay();

// total days in a month
let totalDaysInMonth = new Date(year, month + 1, 0).getDate();


let calendar = [];

for (let i = 0; i < firstDay; i++) {
    calendar.push("");
}


for (let index = 1; index < totalDaysInMonth; index++) {
    calendar.push(index);
}


while (calendar.length % 7 !== 0) {
    calendar.push('');
}

calendar.forEach((date) => {
    let div = document.createElement('div');
    div.classList.add('md:w-[60px]', 'flex', 'justify-center', 'items-center', 'h-[50px]', "hover:border-2", "hover:border-gray-500");
    if (now.getDate() == date) {
        console.log('matched');
        div.classList.add('bg-[rgb(33,178,171)]');
        div.classList.remove("hover:border-2", "hover:border-gray-500");
    }
    if (date == "") {
        div.classList.remove("hover:border-2", "hover:border-gray-500");
    }
    div.innerText = date;
    elementDates.append(div);
});












