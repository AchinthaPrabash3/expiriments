const calender = document.querySelector('#calender');
const monthEl = document.querySelector('#month');
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
let drawBlankcalender = () =>{
    for(let i = 0; i< 35 ; i++){
        const day = document.createElement('div');
        day.classList.add('day');

        const dayText = document.createElement('p');
        dayText.classList.add('day-text');
        dayText.textContent = days[i%7];

        const dayNumber = document.createElement('p');
        dayNumber.classList.add('day-num');

        const eventName = document.createElement('small');
        eventName.classList.add('event-name');
        day.appendChild(dayText);
        day.appendChild(dayNumber);
        day.appendChild(eventName);
        calender.appendChild(day);

    }
};

const updateCalender = (month,year,event) =>{
    const dayElement = document.querySelectorAll('.day');

    const theFirst = new Date(); 
    theFirst.setMonth(month);
    theFirst.setYear(year);

    const theFirtDayOfWeek = theFirst.getDate();
    const monthName = months[month];
    const monthWithYear = `${year} - ${monthName}`;
    monthEl.innerText = monthWithYear;
    const daysInMonth = new Date(year, month + 1,0).getDate();

    let dayCounter = 1;
    for(let i=0; i <dayElement.length ; i++){
        const day = dayElement[i];

        const dayNumber = day.querySelector('.day-num');
       if (i >= theFirtDayOfWeek && dayCounter <= daysInMonth){
        dayNumber.innerText = dayCounter;
        dayCounter++;
       }else{
        dayNumber.textContent = '';
       }
    }
};

const previousMonth = () => {
    if (currentMonth === 0) {
      currentMonth = 12;
      currentYear--;
    }
    updateCalender(--currentMonth, currentYear);
  };
  
  const nextMonth = () => {
    if (currentMonth === 11) {
      currentMonth = -1;
      currentYear++;
    }
    updateCalender(++currentMonth, currentYear);
  };
drawBlankcalender();
updateCalender(currentMonth,currentYear);