let selectedRating = null;

document.addEventListener("DOMContentLoaded", function(){
    const ratingButtons = document.querySelectorAll(".rating-buttons button");
    ratingButtons.forEach(button => {
        button.addEventListener("click", function(){
            selectedRating = this.textContent;
        });
    });
});

function submit(){
    if(selectedRating){
        document.querySelector(".rating-container").style.display = "none";
        document.getElementById("thanks-container").style.display = "block";
        document.getElementById("thanks-container").innerHTML = `
            <img src="images/illustration-thank-you.svg">
            <div class="selected-rating">
                <span style="color: hsl(25, 97%, 53%); text-align: center;">You selected ${selectedRating} out of 5</span>
            </div>
            <h2>Thank you!</h2>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>`;
    }else{
        document.getElementById("error-message").textContent = `Select an option`;
    }
}