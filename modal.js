const contactMe = document.getElementById("contactMe");
const modal = document.getElementById("bioModal");

contactMe.addEventListener("click", function(event){
    event.preventDefault();
    modal.style.display = "block";
});

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
};