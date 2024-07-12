const dailyBtn = document.querySelector('#daily-btn');
const weeklyBtn = document.querySelector('#weekly-btn');
const monthlyBtn = document.querySelector('#monthly-btn');
const buttons = document.querySelectorAll('.btn');
const titles = document.querySelectorAll('.title');
const currentValues = document.querySelectorAll('.current-values');
const previousValues = document.querySelectorAll('.previous-values');


const getData = async () => {
    const response = await fetch('./data/data.json');
    const data = await response.json();
    
    titles.forEach((title, index) => {
        title.textContent = data[index].title;
    });

    buttons.forEach((button, _, arr) => {
        button.addEventListener('click', (e) => {
            const target = e.currentTarget;
            arr.forEach(btn => {
                btn.style = 'color: #94A3B8;'
            });
            target.style = 'color: #F8FAFC;';
        });
    });

    dailyBtn.addEventListener('click', () => {
        currentValues.forEach((currentValue, index) => {
            currentValue.textContent = data[index].timeframes.daily.current;
        });
        previousValues.forEach((previousValue, index) => {
            previousValue.textContent = data[index].timeframes.daily.previous;
        });
    });
    
    weeklyBtn.addEventListener('click', () => {
        currentValues.forEach((currentValue, index) => {
            currentValue.textContent = data[index].timeframes.weekly.current;
        });
        previousValues.forEach((previousValue, index) => {
            previousValue.textContent = data[index].timeframes.weekly.previous;
        });
    });
    
    monthlyBtn.addEventListener('click', () => {
        currentValues.forEach((currentValue, index) => {
            currentValue.textContent = data[index].timeframes.monthly.current;
        });
        previousValues.forEach((previousValue, index) => {
            previousValue.textContent = data[index].timeframes.monthly.previous;
        });
    });
}

getData();
