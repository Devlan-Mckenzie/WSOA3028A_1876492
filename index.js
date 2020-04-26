let HomeButton = document.getElementsByClassName("HomeButton")[0];
if (HomeButton != null){
    HomeButton.style.cursor = "pointer";
    HomeButton.addEventListener("click",function(){ location.href = "../../../../index.html" ; });
}
