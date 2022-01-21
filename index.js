for (let i = 0; i < document.getElementsByClassName("drum").length; i++) {
  document
    .getElementsByClassName("drum")
    [i].addEventListener("click", function () {
      //   var audio = new Audio("sounds/tom-1.mp3");
      //   audio.play();
      this.style.color = "red";
    });
}
