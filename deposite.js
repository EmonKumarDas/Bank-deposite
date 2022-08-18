
document.getElementById("deposite-btn").addEventListener("click", function() {
    // get the deposite amount from the input field
    let deposite = document.getElementById("Deposite-Amount");
    let newDepostieString = deposite.value;
    let newDeposite = parseFloat(newDepostieString);
    // set amount inside the text
    let D_amount = document.getElementById("Current-amount");
    let current_deposite = D_amount.innerText;
    let current_deposite_amount = parseFloat(current_deposite);
    if(newDepostieString === ""){
        alert("Please enter your deposite amount");
    }
    else{
        D_amount.innerText = newDeposite + current_deposite_amount;
        // deposite amount add to the total
        let total_amountstring = document.getElementById("total-amount");
        let total = total_amountstring.innerText;
        let total_amount = parseFloat(total);
        total_amountstring.innerText = total_amount + newDeposite;
        deposite.value = "";
    }
 
});
// end of deposite 
    document.getElementById("withdraw-btn").addEventListener("click", function() { 
    // withdraw amount add from input field
    let amount_string = document.getElementById("Withdraw-Amount");
    let withdraw_amountstring = amount_string.value;
    let withdraw_amount = parseFloat(withdraw_amountstring);

        // get current withdraw_amount
        let withdraw = document.getElementById("withdraw-amount");
        let withdraw_ = withdraw.innerText;
        let previous_withdraw_amount = parseFloat(withdraw_);
        let current_withdraw = previous_withdraw_amount + withdraw_amount;
        withdraw.innerText = current_withdraw;
        amount_string.value = "";

    // get total amount
    GetTotal("total-amount",withdraw_amount);
    

});




