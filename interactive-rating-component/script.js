function show(){
    day = document.getElementById("day").value;
    month = document.getElementById("month").value;
    year = document.getElementById("year").value;
    
    n =  new Date();
    current_year = n.getFullYear();
    current_month = n.getMonth() + 1;
    current_day = n.getDate();
    
    years_past = current_year - year;
    
    months_past = current_month - month;
    if(months_past < 0){
        years_past--;
        months_past += 12;
    }
    
    days_past = current_day - day;
    if(days_past < 0){
        months_past--;
        const last_day_month = new Date(current_year, current_month, 0).getDate();
        days_past += last_day_month;
    }
    document.getElementById("result").innerHTML = "<p><span class='result-num'>" + years_past + "</span> years</p>" + 
        "<p><span class='result-num'>" + months_past + "</span> month</p>" + 
        "<p><span class='result-num'>" + days_past + "</span> days</p>";
}
