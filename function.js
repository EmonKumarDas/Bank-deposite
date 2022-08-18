function GetTotal(id,withdraw_amount){
    let total_amountstring = document.getElementById(id);
    let total = total_amountstring.innerText;
    let total_amount = parseFloat(total);
    let current_total = total_amount - withdraw_amount;
    total_amountstring.innerText = current_total;    
    
}
