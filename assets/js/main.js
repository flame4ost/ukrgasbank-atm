let totalAmount = 25000;
let totalAmoun2 = 400;
let totalAmoun3 = 600;

let withdarawalBtn = document.getElementById("withdarawal");
let billPay = document.getElementById("billPay");
let ballanceInquiryBtn = document.getElementById("ballanceInquiry");
let ref = document.getElementById("ref");
let btnReff = document.getElementById("btnReff");

let transferBtn = document.getElementById("transfer");
let depositBtn = document.getElementById("deposit");
let otherTransaction = document.getElementById("otherTransaction");
let firstText = document.getElementById("firstText");
let firstText2 = document.getElementById("firstText2");
let Exit = document.getElementById("Exit");
let btnOK = document.getElementById("btnOK");
let btnOK2 = document.getElementById("btnOK2");
let amounts = document.getElementById("amounts");
let secondText = document.getElementById("secondText");
let secondText2 = document.getElementById("secondText2");
let amount = document.getElementById("amount");
let amount2 = document.getElementById("amount2");
let doubleTransactions = document.getElementById("doubleTransactions");
let amountIn = document.getElementById("amountIn").value;
let back = document.getElementById("back");
let lin1 = document.getElementById("lin1");
let lin2 = document.getElementById("lin2");
let transactions = document.getElementById("transactions");
let btnsSecreen = document.getElementById("btnsSecreen");
let pin1 = document.getElementById("pin1").value;
let btnEnter = document.getElementById("btnEnter");
let pas = document.getElementById("pas");
let num = document.getElementById("num");
let pinMsg = document.getElementById("pinMsg");
let billPayDiv = document.getElementById("billPayDiv");
let pinDiv = document.getElementById("pinDiv");
let pinHeading = document.getElementById("pinHeading");

btnOK.onclick = OK;
function OK() {
  let amountIn = document.getElementById("amountIn").value;
  if (Number(amountIn) - totalAmount <= 10) {
    secondText.innerHTML = "у вас недостатньо кредиту";
    secondText.innerHTML = "Ви не можете мати менше 10 ₴ українських долярів";
    amount.innerHTML = "Ваш загальний баланс становить ₴" + totalAmount;
    back.innerHTML = "Повернутися до головного меню";
  } else if (Number(amountIn) + totalAmount >= 30000) {
    secondText.innerHTML = "у вас недостатньо кредиту";
    secondText.innerHTML = "Не можна мати більше ніж ₴25000";
    amount.innerHTML = "Ваш загальний баланс становить ₴" + totalAmount;
    back.innerHTML = "Повернутися до головного меню";
  } else {
    secondText.innerHTML = "Успішна транзакція ₴" + Number(amountIn);
    amount.innerHTML =
      "Успішна транзакція ₴" + (totalAmount - Number(amountIn));
    back.innerHTML = "Повернутися до головного меню";
  }
}
withdarawalBtn.onclick = withdarawal;
function withdarawal() {
  btnsSecreen.style.display = "none";
  transactions.style.display = "block";
  firstText.innerHTML = "Будь ласка, введіть вашу суму ";

  btnOK.onclick = function () {
    let amountRet = document.getElementById("amountIn").value;

    // secondText.innerHTML = "No tienes suficiente crédito";
    if (totalAmount - Number(amountRet) < 10) {
      // secondText.innerHTML = "No tienes suficiente crédito";
      secondText.innerHTML = "На вашому рахунку не може бути менше 10 ₴ грн";
      amount.innerHTML = "Ваш загальний баланс становить ₴" + totalAmount;
      back.innerHTML = "Повернутися до головного меню";
      console.log(amountDep);
    } else {
      secondText.innerHTML = "Успішна транзакція ₴" + Number(amountRet);
      amount.innerHTML =
        "Ваш поточний баланс становить ₴" + (totalAmount - Number(amountRet));
      back.innerHTML = "Повернутися до головного меню";
    }
  };
}

// btnOK.onclick = OK;
// function OK() {
//   let amountIn = document.getElementById("amountIn").value;
//   if (amountIn < totalAmount) {
//     secondText.innerHTML = "Transaction Succesed $" + amountIn;
//     amount.innerHTML = "Remaining amount is ₴" + (totalAmount - amountIn);
//     back.innerHTML = "Back to main screen";
//   } else {
//     secondText.innerHTML = "You have't enough credit";
//     amount.innerHTML = "Your total ballance is ₴" + totalAmount;
//     back.innerHTML = "Back to main secreen";
//   }
// }
// btnOK2.onclick = OK2;
// function OK2() {
//   let amountIn2 = document.getElementById("amountIn2").value;
//   if (amountIn2 < totalAmount) {
//     secondText2.innerHTML = "Transaction Succesed $" + amountIn2;
//     amount2.innerHTML = "Remaining amount is ₴" + (totalAmount - amountIn2);
//     back.innerHTML = "Back to main secreen";
//   } else {
//     secondText2.innerHTML = "You have't enough credit";
//     amount2.innerHTML = "Your total ballance is ₴" + totalAmount;
//     back.innerHTML = "Back to main secreen";
//   }
// }

lin2.onclick = Back;
function Back() {
  billPayDiv.style.display = "none";
  billPayDiv.style.display = "none";
  btnsSecreen.style.display = "block";
}

lin1.onclick = Back;
function Back() {
  billPayDiv.style.display = "none";
  // billPayDiv.style.display = "none";
  btnsSecreen.style.display = "block";
  transactions.style.display = "none";
}

billIn.onclick = Trans;
function Trans() {
  // billPayDiv.style.display = "none";
  billPayDiv.style.display = "none";
  btnsSecreen.style.display = "block";
  transactions.style.display = "none";
  btnReff.style.display = "none";
}

btnEnter.onclick = login;
function login() {
  let pin1 = document.getElementById("pin1").value;

  if (pin1 == 1997) {
    pas.style.display = "none";
    btnsSecreen.style.display = "block";
  } else {
    pinMsg.innerHTML = "Пароль не збігається";
  }
}

billPay.onclick = billPayment;
function billPayment() {
  firstText2.innerHTML = "Введіть номер рахунку-фактури";
  btnsSecreen.style.display = "none";
  billPayDiv.style.display = "block";
}

btnReff.onclick = change;
function change() {
  ref.style.display = "none";
  billPay.style.display = "block";
  billPayDiv.style.display = "block";
  firstText2.innerHTML = "Введіть загальний рахунок";
}

ballanceInquiryBtn.onclick = billInquiry;
function billInquiry() {
  btnsSecreen.style.display = "none";
  billPayDiv.style.display = "none";
  transactions.style.display = "block";
  ref.style.display = "none";
  amounts.style.display = "none";
  firstText.innerHTML = "Запит балансу";
  secondText.innerHTML = "Загальний залишок на рахунку становить ₴" + totalAmount;
}
transferBtn.onclick = transferMoney;
function transferMoney() {
  transactions.style.display = "block";
  btnsSecreen.style.display = "none";
  billPayDiv.style.display = "none";
  firstText.innerHTML = "Введіть суму";
  btnOK.onclick = function () {
    // let totalAmount = 200;
    let amountTrans = document.getElementById("amountIn").value;
    // secondText.innerHTML = "у вас недостатньо кредиту";
    if (Number(amountTrans) - totalAmount >= 10) {
      // secondText.innerHTML = "у вас недостатньо кредиту";
      secondText.innerHTML = "На рахунку не може бути менше ₴10";
      amount.innerHTML = "Ваш загальний баланс становить ₴" + totalAmount;
      back.innerHTML = "Повернутися до головного меню";
      console.log(amountTrans);
    } else {
      secondText.innerHTML = "Успішна транзакція ₴" + Number(amountTrans);
      amount.innerHTML =
        "Ваш поточний баланс становить ₴" + (totalAmount - Number(amountTrans));
      back.innerHTML = "Повернутися до головного меню";
    }
  };
}
depositBtn.onclick = depositMoney;
function depositMoney() {
  transactions.style.display = "block";
  btnsSecreen.style.display = "none";
  billPayDiv.style.display = "none";
  firstText.innerHTML = "Введіть суму";
  btnOK.onclick = function () {
    // let totalAmount = 30000;
    let amountDep = document.getElementById("amountIn").value;

    // secondText.innerHTML = "No tienes suficiente crédito";
    if (Number(amountDep) + totalAmount >= 30000) {
      // secondText.innerHTML = "No tienes suficiente crédito";
      secondText.innerHTML = "На рахунку не може бути більше ₴30000";
      amount.innerHTML = "Ваш загальний баланс становить ₴" + totalAmount;
      back.innerHTML = "Повернутися до головного меню";
      console.log(amountDep);
    } else {
      secondText.innerHTML = "Успішна транзакція ₴" + Number(amountDep);
      amount.innerHTML =
        "Успішна транзакція ₴" + (totalAmount + Number(amountDep));
      back.innerHTML = "Повернутися до головного меню";
    }
    // secondText.innerHTML = "Succesfully Added ₴" + pin1;
    // amount.innerHTML = "Your new ballance is ₴" + (totalAmount + Number(pin1));
  };

  Exit.onclick = exit;
  function exit() {
    transactions.style.display = "none";
    billPayDiv.style.display = "none";
    btnsSecreen.style.display = "none";
    pas.style.display = "block";
    pinDiv.style.display = "none";
    pinHeading.innerHTML = "Дякуємо, що довіряєте нам :)";
    pinMsg.innerHTML = "Ми не ставимо під загрозу безпеку клієнтів!";
  }

  back.onclick = back;
  function back() {
    location.reload();
    pas.style.display = "block";
    transactions.style.display = "none";
    billPayDiv.style.display = "none";
    btnsSecreen.style.display = "none";
  }
}
