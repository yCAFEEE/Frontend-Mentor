var bill = 0;
var num_people = 1;
var total_per_person = 0;
var tip_per_person = 0;
var tip_percentage = 0;

document.getElementById("bill_id").addEventListener("input", function(event){
    bill = Number(event.target.value);
    calc_and_show();
});

document.getElementById("number_people_id").addEventListener("input", function(event){
    num_people = Number(event.target.value);
    calc_and_show();
});

document.getElementById("custom_tip_id").addEventListener("input", function(event){
    tip_percentage = Number(event.target.value);
    calc_and_show();
});

document.addEventListener("DOMContentLoaded", function(){
    const tipButtons = document.querySelectorAll(".buttons-container button");
    tipButtons.forEach(button => {
        button.addEventListener("click", function(){
            tip_percentage = Number(this.textContent.replace('%', ''));
            calc_and_show();
        });
    });
});

function calc_and_show(){
    if(num_people > 0){
        tip_per_person = (bill * (tip_percentage / 100)) / num_people;
        total_per_person = (bill / num_people) + tip_per_person;
        
        show_results();
    }
}

function show_results(){
    document.getElementById("tip-amount").innerHTML = `<p>$ ${tip_per_person.toFixed(2)}</p>`;
    document.getElementById("tip-amount").style.display = "block";
    
    document.getElementById("total").innerHTML = `<p>$ ${total_per_person.toFixed(2)}</p>`;
    document.getElementById("total").style.display = "block";
}

function reset(){
    bill = 0;
    num_people = 1;
    total_per_person = 0;
    tip_per_person = 0;
    tip_percentage = 0;

    document.getElementById("bill_id").value = null;
    document.getElementById("number_people_id").value = null;
    document.getElementById("custom_tip_id").value = null;
    document.getElementById("tip-amount").style.display = "none";
    document.getElementById("total").style.display = "none";
}