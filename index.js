let HomeButton = document.getElementsByClassName("HomeButton")[0];
if (HomeButton != null){
    HomeButton.style.cursor = "pointer";
    HomeButton.addEventListener("click",function(){ location.href = "../../../../index.html" ; });
}

let CharacterButton = document.getElementsByClassName("CharacterButton")[0];
if (CharacterButton != null){
    CharacterButton.style.cursor = "pointer";
    CharacterButton.addEventListener("click",function(){ location.href = "../../../../../WSOA3028A_1876492/Character/Character.html" ; });
}

let TheoryButton = document.getElementsByClassName("TheoryButton")[0];
if (TheoryButton != null){
    TheoryButton.style.cursor = "pointer";
    TheoryButton.addEventListener("click",function(){ location.href = "../../../../../WSOA3028A_1876492/Theory/Theory.html" ; });
}