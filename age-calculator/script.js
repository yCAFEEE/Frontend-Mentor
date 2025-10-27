function show(){
    function showError(containerSelector, inputSelector, message){
        const container = document.querySelector(containerSelector);
        const input = document.querySelector(inputSelector);

        container.style.color = "var(--red-400)";
        input.style.border = "solid 1px var(--red-400)";
        input.style.color = "var(--red-400)";

        const existing = container.querySelector('.error-msg');
        if(existing){
            existing.textContent = message;
        }else{
            container.insertAdjacentHTML('beforeend', `<p class="error-msg" style="font-size: 12px;">${message}</p>`)
        }
    }

    function clearError(containerSelector, inputSelector){
        const container = document.querySelector(containerSelector);
        const input = document.querySelector(inputSelector);

        if(container){
            const existing = container.querySelector('.error-msg');
            if(existing) existing.remove();
            container.style.color = '';
        }
        if(input){
            input.style.color = '';
            input.style.border = '';
        }
    }

    clearError("#year-input", "#year");
    clearError("#month-input", "#month");
    clearError("#day-input", "#day");

    let deuRuim = false; 

    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    const n = new Date();
    const current_year = n.getFullYear();
    const current_month = n.getMonth() + 1;
    const current_day = n.getDate();
    
    if(isNaN(year) || year < 0){
        showError("#year-input", "#year", "Must be a valid year");
        deuRuim = true;
    }
    else if(year > current_year){
        showError("#year-input", "#year", "Must be in the past");
        deuRuim = true;
    }

    if(isNaN(month) || (month > current_month && year == current_year) || month < 0 || month > 12){
        showError("#month-input", "#month", "Must be a valid month");
        deuRuim = true;
    }

    if(isNaN(day) || (day > current_day && month == current_month) || day < 0 || day > 31){
        showError("#day-input", "#day", "Must be a valid day");
        deuRuim = true;
    }

    if(deuRuim) return;

    let years_past = current_year - year;
    
    let months_past = current_month - month;
    if(months_past < 0){
        years_past--;
        months_past += 12;
    }
    
    let days_past = current_day - day;
    if(days_past < 0){
        months_past--;
        const last_day_month = new Date(current_year, current_month, 0).getDate();
        days_past += last_day_month;
    }
    document.getElementById("result").innerHTML = "<p><span class='result-num'>" + years_past + "</span> years</p>" + 
        "<p><span class='result-num'>" + months_past + "</span> month</p>" + 
        "<p><span class='result-num'>" + days_past + "</span> days</p>";
}
