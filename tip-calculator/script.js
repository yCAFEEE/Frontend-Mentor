var bill;
var num_people;
var total;
var tip;

document.getElementById("bill_id").addEventListener("input", function(event){
    bill = Number(event.target.value);
    calc_tip();
    calc_total();
    show_tip();
    show_total();
});

document.getElementById("number_people_id").addEventListener("input", function(event){
    num_people = Number(event.target.value);
    calc_tip();
    calc_total();
    show_tip();
    show_total();
});

document.addEventListener("DOMContentLoaded", function(){
    const tipButtons = document.querySelectorAll(".buttons-container button");
    tipButtons.forEach(button => {
        button.addEventListener("click", function(){
            tip = Number(this.textContent.replace('%', ''));
            calc_tip();
            calc_total();
            show_tip();
            show_total();
        });
    });
});

function calc_tip(){
    if(tip != null){
        tip /= 100;
        tip *= bill;
        tip /= num_people;
    }
}

function show_tip(){
    document.getElementById("tip-amount").innerHTML = `<p>$ ${tip.toFixed(2)}</p>`;
    document.getElementById("tip-amount").style.display = "block";
}

function calc_total(){
    if(num_people > 0){
        total = bill / num_people;
        total -= tip;
    }else{
        total = 0;
    }
}

function show_total(){
    document.getElementById("total").innerHTML = `<p>$ ${total.toFixed(2)}</p>`;
    document.getElementById("total").style.display = "block";
}

function reset(){
    document.getElementById("bill_id").value = null;
    document.getElementById("number_people_id").value = null;
    document.getElementById("custom_tip_id").value = null;
    document.getElementById("tip-amount").style.display = "none";
    document.getElementById("total").style.display = "none";
}