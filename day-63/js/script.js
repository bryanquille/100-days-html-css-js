const clearBtn = document.querySelector("#clear-btn");
const form = document.querySelector("#form");
const amount = document.querySelector("#amount");
const term = document.querySelector("#term");
const interestRate = document.querySelector("#interest");
const mortgageType = document.getElementsByName("type");
const calculateBtn = document.querySelector("#calculate-btn");
const responseBox = document.querySelector("#response-box");
const emptyResults = document.querySelector("#empty-results");
const completedResults = document.querySelector("#completed-results");
const monthlyRepayments = document.querySelector("#monthly-repayments");
const totalRepayment = document.querySelector("#total-repay");

const hiddenResults = () => {
  emptyResults.classList.remove("visibleResults");
  emptyResults.classList.remove("hiddenResults");
  completedResults.classList.remove("hiddenResults");
  completedResults.classList.remove("visibleResults");

  emptyResults.classList.add("visibleResults");
  completedResults.classList.add("hiddenResults");
};

const showresults = () => {
  emptyResults.classList.remove("visibleResults");
  emptyResults.classList.add("hiddenResults");
  completedResults.classList.remove("hiddenResults");
  completedResults.classList.add("visibleResults");
};

clearBtn.addEventListener("click", () => {
  form.reset();
  hiddenResults();
});

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const amountValue = amount.value;
  const termValue = term.value;
  const interestRateValue = interestRate.value;
  let mortgageTypeValue = "";
  for (let i = 0; i < mortgageType.length; i++) {
    if (mortgageType[i].checked) {
      mortgageTypeValue = mortgageType[i].value;
    }
  }

  if (amountValue === "" || termValue === "" || interestRateValue === "") {
    alert("Please fill out all fields to calculate!");
    form.reset();
    hiddenResults();
    return;
  }

  const p = Number(amountValue);
  const r = Number(interestRateValue) / 100 / 12;
  const n = Number(termValue) * 12;
  const c = (r * p) / (1 - (1 + r) ** -n);

  if (mortgageTypeValue === "repayment") {
    const total = c * n;
    monthlyRepayments.textContent = `$ ${c.toFixed(2)}`;
    totalRepayment.textContent = `$ ${total.toFixed(2)}`;
    showresults();
  } else if (mortgageTypeValue === "interest") {
    const iTotal = c * n - p;
    const im = iTotal / n;
    monthlyRepayments.textContent = `$ ${im.toFixed(2)}`;
    totalRepayment.textContent = `$ ${iTotal.toFixed(2)}`;
    showresults();
  }
});
