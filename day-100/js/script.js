// General Elements
const heroImg = document.querySelector('#hero-img');
const mainFooterContainer = document.querySelector('#main-footer-container');
const stepNumbers = document.querySelectorAll('.step-number');
const steps = document.querySelectorAll('.steps');
const backBtn = document.querySelector('#back-btn');
const nextBtn = document.querySelector('#next-btn');
const confirmBtn = document.querySelector('#confirm-btn');
const form = document.querySelector('#form');
const monthlySelection = document.querySelectorAll('.monthly-selection');
const yearlySelection = document.querySelectorAll('.yearly-selection');

// Section 1
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneNumberInput = document.querySelector('#phone-number');

// Section 2
const plans = document.getElementsByName('plan');
const monthlyYearlyBtn = document.querySelector('#monthly-yearly-btn');
const monthlyTextButton = document.querySelector('#monthly-text');
const yearlyTextButton = document.querySelector('#yearly-text');

// Section 3
const addOns = document.getElementsByName('add-ons');
const selectedOnsOs = document.querySelector('#selected-ons-os');
const selectedOnsLs = document.querySelector('#selected-ons-ls');
const selectedOnsCp = document.querySelector('#selected-ons-cp');

// Section 4
const selectedPlanText = document.querySelector('#selected-plan');
const selectedPlanPrice = document.querySelector('#selected-plan-price');
const totalPriceToPay = document.querySelector('#total-price-to-pay');
const changePlanBtn = document.querySelector('#change-plan-btn');

// Success section
const successSubmit = document.querySelector('#success-submit');

let stepScene = 0;
let planTime = 'monthly';
const priceValues = {
    'monthly': {
        'plan': {
            'arcade': 9,
            'advanced': 12,
            'pro': 15
        },
        'addOns': {
            'online-service': 1,
            'larger-storage': 2,
            'customizable-profile': 2
        }
    },
    'yearly': {
        'plan': {
            'arcade': 90,
            'advanced': 120,
            'pro': 150
        },
        'addOns': {
            'online-service': 10,
            'larger-storage': 20,
            'customizable-profile': 20
        }
    }
}

// Set min-height of mainFooterContainer
document.addEventListener('DOMContentLoaded', () => {
    mainFooterContainer.style = `min-height: ${window.innerHeight - heroImg.height}px;`;
    if (window.innerWidth >= 1024) {
        heroImg.src = 'assets/images/bg-sidebar-desktop.svg';
        mainFooterContainer.style = `min-height: ${540}px`;
    }
});

const showButton = (button) => {
    button.classList.remove('hid-btn');
    if ([...button.classList].includes('show-btn') === false) {
        button.classList.add('show-btn');
    }
}

const hidButton = (button) => {
    button.classList.remove('show-btn');
    if ([...button.classList].includes('hid-btn') === false) {
        button.classList.add('hid-btn');
    }
}

const showHidButtons = (index) => {
    switch (index) {
        case 0:
            hidButton(backBtn);
            hidButton(confirmBtn);
            showButton(nextBtn);
            break;
        case 1:
            hidButton(confirmBtn);
            showButton(backBtn);
            showButton(nextBtn);
            break;
        case 2:
            hidButton(confirmBtn);
            showButton(backBtn);
            showButton(nextBtn);
            break;
        case 3:
            hidButton(nextBtn);
            showButton(backBtn);
            showButton(confirmBtn);
            break;
    
        default:
            break;
    }
}

const showStep = (index) => {
    // Fill selected step number button
    stepNumbers.forEach(step => 
        step.classList.remove('selected-step-number')
    );
    stepNumbers[index].classList.add('selected-step-number');

    // Show Step Form
    steps.forEach(stepForm => {
        if ([...stepForm.classList].includes('hid-step') === false) {
            stepForm.classList.add('hid-step');
        }
    });
    steps[index].classList.remove('hid-step');
}

const addOnsSelection = () => {
    let onlineServicePrice = '00';
    let largerStoragePrice = '00';
    let customizableProfilePrice = '00';
    addOns.forEach(addOn => {
        if (addOn.checked) {
            if (addOn.id === 'online-service') {
                onlineServicePrice = priceValues[planTime].addOns[addOn.id];
                selectedOnsOs.textContent = onlineServicePrice;
            } else if (addOn.id === 'larger-storage') {
                largerStoragePrice = priceValues[planTime].addOns[addOn.id];
                selectedOnsLs.textContent = largerStoragePrice;
            } else if (addOn.id === 'customizable-profile') {
                customizableProfilePrice = priceValues[planTime].addOns[addOn.id];
                selectedOnsCp.textContent = customizableProfilePrice;
            }
        } else {
            if (addOn.id === 'online-service') {
                onlineServicePrice = '00';
                selectedOnsOs.textContent = onlineServicePrice;
            } else if (addOn.id === 'larger-storage') {
                largerStoragePrice = '00';
                selectedOnsLs.textContent = largerStoragePrice;
            } else if (addOn.id === 'customizable-profile') {
                customizableProfilePrice = '00';
                selectedOnsCp.textContent = customizableProfilePrice;
            }
        }
        addOn.addEventListener('change', () => {
            if (addOn.checked) {
                if (addOn.id === 'online-service') {
                    onlineServicePrice = priceValues[planTime].addOns[addOn.id];
                    selectedOnsOs.textContent = onlineServicePrice;
                } else if (addOn.id === 'larger-storage') {
                    largerStoragePrice = priceValues[planTime].addOns[addOn.id];
                    selectedOnsLs.textContent = largerStoragePrice;
                } else if (addOn.id === 'customizable-profile') {
                    customizableProfilePrice = priceValues[planTime].addOns[addOn.id];
                    selectedOnsCp.textContent = customizableProfilePrice;
                }
            } else {
                if (addOn.id === 'online-service') {
                    onlineServicePrice = '00';
                    selectedOnsOs.textContent = onlineServicePrice;
                } else if (addOn.id === 'larger-storage') {
                    largerStoragePrice = '00';
                    selectedOnsLs.textContent = largerStoragePrice;
                } else if (addOn.id === 'customizable-profile') {
                    customizableProfilePrice = '00';
                    selectedOnsCp.textContent = customizableProfilePrice;
                }
            }
            totalValue();
        });
    });
}

// Set price values on the last step
const monthlyYearlyPriceValues = (planSelected) => {
    if (planTime === 'monthly') {
        const planPrice = priceValues.monthly.plan[planSelected];
        selectedPlanText.textContent = planSelected;
        selectedPlanPrice.textContent = planPrice;
        addOnsSelection();
        totalValue();
    } else if (planTime === 'yearly') {
        const planPrice = priceValues.yearly.plan[planSelected];
        selectedPlanText.textContent = planSelected;
        selectedPlanPrice.textContent = planPrice;
        addOnsSelection();
        totalValue();
    }
}

const totalValue = () => {
    const planPriceValue = Number(selectedPlanPrice.textContent);
    const selectedOnsOsValue = Number(selectedOnsOs.textContent);
    const selectedOnsLsValue = Number(selectedOnsLs.textContent);
    const selectedOnsCpValue = Number(selectedOnsCp.textContent);
    const totalSum = planPriceValue + selectedOnsOsValue + selectedOnsLsValue + selectedOnsCpValue;
    totalPriceToPay.textContent = totalSum;
}

// Step buttons' funtionality
stepNumbers.forEach((stepNumber, index) => {
    stepNumber.addEventListener('click', () => {
        showStep(index);
        showHidButtons(index);
        stepScene = index;
    });
});

backBtn.addEventListener('click', () => {
    if (stepScene === 1) {
        stepScene = 0;
        showStep(stepScene);
        showHidButtons(stepScene);
    } else if (stepScene === 2) {
        stepScene = 1;
        showStep(stepScene);
        showHidButtons(stepScene);
    } else if (stepScene === 3) {
        stepScene = 2;
        showStep(stepScene);
        showHidButtons(stepScene);
    }
});

nextBtn.addEventListener('click', () => {
    if (stepScene === 0) {
        stepScene = 1;
        showStep(stepScene);
        showHidButtons(stepScene);
    } else if (stepScene === 1) {
        stepScene = 2;
        showStep(stepScene);
        showHidButtons(stepScene);
    } else if (stepScene === 2) {
        stepScene = 3;
        showStep(stepScene);
        showHidButtons(stepScene);
    }
});

// Plan Checkbox
plans.forEach((plan, _, arrPlans) => {
    if (plan.checked) {
        monthlyYearlyPriceValues(plan.id);
    }
    plan.addEventListener('change', (e) => {
        arrPlans.forEach(sPlan => {
            sPlan.parentElement.classList.remove('checked-plan');
            sPlan.checked = false;
        });
        const planInput = e.currentTarget;
        const planId = e.currentTarget.id;
        planInput.checked = true;
        const planLabel = e.currentTarget.parentElement;
        planLabel.classList.add('checked-plan');
        monthlyYearlyPriceValues(planId);
    });
});

// Switch monthly-yearly values
monthlyYearlyBtn.addEventListener('click', (e) => {
    const circle = e.currentTarget.firstChild;
    if (planTime === 'monthly') {
        planTime = 'yearly';
        circle.classList.remove('monthly-circle');
        circle.classList.add('yearly-circle');
        yearlyTextButton.classList.add('bold-text');
        monthlyTextButton.classList.remove('bold-text');
        monthlyTextButton.classList.add('gray-bold-text');
        yearlySelection.forEach(ySelection => {
            ySelection.classList.remove('hid-yearly');
            ySelection.classList.add('show-yearly');
        });
        monthlySelection.forEach(mSelection => {
            mSelection.classList.remove('show-monthly');
            mSelection.classList.add('hid-monthly');
        });
        plans.forEach((plan) => {
            if (plan.checked) {
                monthlyYearlyPriceValues(plan.id);
            }
        });
        addOnsSelection();
        return;
    } 
    if (planTime === 'yearly') {
        planTime = 'monthly';
        circle.classList.add('monthly-circle');
        circle.classList.remove('yearly-circle');
        yearlyTextButton.classList.remove('bold-text');
        monthlyTextButton.classList.add('bold-text');
        yearlySelection.forEach(ySelection => {
            ySelection.classList.add('hid-yearly');
            ySelection.classList.remove('show-yearly');
        });
        monthlySelection.forEach(mSelection => {
            mSelection.classList.add('show-monthly');
            mSelection.classList.remove('hid-monthly');
        });
        plans.forEach((plan) => {
            if (plan.checked) {
                monthlyYearlyPriceValues(plan.id);
            }
        });
        addOnsSelection();
        return;
    }
});

totalValue();

// Change plan
changePlanBtn.addEventListener('click', () => {
    stepScene = 1;
    showStep(1);
    showHidButtons(1);
});

// Submit form
confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInputValue = nameInput.value;
    const emailInputValue = emailInput.value;
    const phoneNumberInputValue = phoneNumberInput.value;
    if (nameInputValue === '' || emailInputValue === '' || phoneNumberInputValue === '') {
        alert('Please fill-out all fields');
        stepScene = 0;
        showStep(stepScene);
        showHidButtons(stepScene);
        return;
    }
    steps[3].classList.add('hid-step');
    successSubmit.classList.remove('hid-step');
    form.reset();
});