let stay = document.getElementById("stay");
let know = document.getElementById("know");
let loyalty = document.getElementById("loyalty");
let interest = document.getElementById("interest");
let price = document.getElementById("price");

function calcu(){
    let total = eval(stay.value) + eval(know.value) + eval(loyalty.value) + eval(interest.value);
    price.innerHTML = "Total: $ "+total;
}