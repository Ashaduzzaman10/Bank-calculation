document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("Withdraw-field");
  const newWithDrawAmountString = withdrawField.value;
  const newWithDrawAmount = parseFloat(newWithDrawAmountString);
  console.log(newWithDrawAmount);
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const currentwithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
  withdrawTotalElement.innerText = currentwithdrawTotal;
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  withdrawField.value = '';
  if (newWithDrawAmount > previousBalanceTotal) {
    alert("baper bank e taka nai ")
    return;
  }
  const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
  balanceTotalElement.innerText = newBalanceTotal
  withdrawField.value = "";
});
