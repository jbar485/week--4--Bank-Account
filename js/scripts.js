//Account Logic
function Account (name, total){
  this.name = name;
  this.total = total;
}

Account.prototype.makeTransaction = function(amount) {
  this.total += amount;
  console.log(this.total);
}

function displayTotal(total){
  $("#currentValue").text(total);
}

//initialize global variable <- not functional in document ready function!!!
var newAccount;



// User Interface Logic
$(document).ready(function(){

  $("#userCreateInput").submit(function(event){
    event.preventDefault();

    var name = $("#nameInput").val();
    var total = parseInt($("#depositInput").val());

    newAccount = new Account(name, total);
    displayTotal(newAccount.total);
    $("#userCreateInput").slideUp();
    $("#transactionInput").slideDown();
    $("#currentDisplay").fadeIn();
  });


  //Transactions
  $("#transactionInput").submit(function(event){
    event.preventDefault();
    var depositSwitch = $("input:radio[name=depositSwitch]:checked").val();
    var amount = parseInt($("#amountInput").val());

    if (depositSwitch === "true"){
      newAccount.makeTransaction(amount);
      displayTotal(newAccount.total);
    }
    else if (depositSwitch === "false"){
      newAccount.makeTransaction(-amount);
      displayTotal(newAccount.total);
    }
    $('#transactionInput')[0].reset();
  });

});
