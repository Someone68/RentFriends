let stay = document.getElementById("stay");
let price = document.getElementById("price");
let candy = document.getElementById("candy");

function calcu(){
    let total = eval(stay.value) * 20;
    if(candy.checked)
    total += 30;
    total -= 1;
    total += .99;
    price.innerHTML = "Total: $ "+total;
}

window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    loader.addEventListener('animationend', function() {
      loader.style.opacity = 0;
      setTimeout(function() {
        document.querySelector('#loading-indicator').style.display = 'none';
      }, 500); // change the delay as needed
    });
  });
  