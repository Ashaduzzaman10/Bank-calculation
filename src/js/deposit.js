document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  const depositTotalAmount = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalAmount.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalAmount.innerText = currentDepositTotal;
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotalTotalString = balanceTotal.innerText;
  const previousBalanceTotalTotal = parseFloat(previousBalanceTotalTotalString)
  const currentBalanceTotal = previousBalanceTotalTotal + newDepositAmount;
  balanceTotal.innerText = currentBalanceTotal;
  depositField.value = "";
});
