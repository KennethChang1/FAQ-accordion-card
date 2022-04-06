const click = document.querySelectorAll(".container-flex");
const message = document.querySelectorAll(".message");
const question = document.querySelectorAll(".question");
const arrow = document.querySelectorAll(".arrow");

click.forEach((q, i) => {
    q.addEventListener('click', () => {
        message[i].classList.toggle("hidden");
        if(!message[i].classList.contains("hidden")){
            question[i].style.cssText = "font-weight: 700;";
            arrow[i].style.cssText = "transform: rotate(180deg);";
        } else {
            question[i].style.cssText = "font-weight: 400;";
            arrow[i].style.cssText = "transform: rotate(0deg);";
        }
    });
});