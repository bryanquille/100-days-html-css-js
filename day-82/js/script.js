const initBattery = () => {
    const batteryLiquid = document.querySelector('.Bliquid');
    const batteryStatus = document.querySelector('.Bstatus');
    const batteryPercentage = document.querySelector('.Bpercentage');

    navigator.getBattery().then((batt) => {
        updateBattery = () => {
            let level = Math.floor(batt.level * 100);
            batteryPercentage.innerHTML = `${level}%`;
            batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`;
            if (level == 100) {
                batteryStatus.innerHTML = `Battery Full <span class="material-icons green-color">power</span>`;
                batteryLiquid.style.height = '103%';
            } else if (level <= 20 &! batt.charging) {
                batteryStatus.innerHTML = `Low Charge <span class="material-icons animated-red">power_off</span>`;
            } else if (batt.charging) {
                batteryStatus.innerHTML = `Charging ... <span class="material-icons animated-green">bolt</span>`;
            } else {
                batteryStatus.innerHTML = '';
            }

            if (level <= 20) {
                batteryLiquid.classList.add('gradient-red');
                batteryLiquid.classList.remove('gradient-green', 'gradient-yellow', 'gradient-orange');
            } else if (level <= 48) {
                batteryLiquid.classList.add('gradient-orange');
                batteryLiquid.classList.remove('gradient-green', 'gradient-yellow', 'gradient-red');
            } else if (level <= 80) {
                batteryLiquid.classList.add('gradient-yellow');
                batteryLiquid.classList.remove('gradient-green', 'gradient-red', 'gradient-orange');
            } else {
                batteryLiquid.classList.add('gradient-green');
                batteryLiquid.classList.remove('gradient-red', 'gradient-yellow', 'gradient-orange');
            }
        }
        updateBattery();
        batt.addEventListener('chargingchange', () => updateBattery());
        batt.addEventListener('levelchange', () => updateBattery());
    })
}

initBattery();