document.addEventListener("DOMContentLoaded", function(){
  Cookies.set("testcookie", "yum a cookie")
  var clearButton = document.querySelector("#clearbutton")
  var sugarButton = document.querySelector("#sugarbutton")
  var chocolateButton = document.querySelector("#chocolatebutton")
  var peanutButton = document.querySelector("#peanutbutton")
  var sugarCount = document.querySelector("#sugarcount")
  var chocolateCount = document.querySelector("#chocolatecount")
  var peanutCount = document.querySelector("#peanutcount")
  var crumbleSpot = document.querySelector(".crumble")
  var fullJar = document.querySelector("#fulljar")
  console.log(fullJar)

  var sugarValue = Cookies.get("sugarcookie")
  sugarCount.innerHTML = sugarValue
  if (sugarValue === undefined){
    sugarCount.innerHTML = 0
  }

  var chocolateValue = Cookies.get("chocolatecookie")
  chocolateCount.innerHTML = chocolateValue
  if (chocolateValue === undefined){
    chocolateCount.innerHTML = 0
  }

  var peanutValue = Cookies.get("peanutcookie")
  peanutCount.innerHTML = peanutValue
  if (peanutValue === undefined){
    peanutCount.innerHTML = 0
  }

  if (Cookies.get("sugarcookie") > 0 || Cookies.get("chocolatecookie") > 0 || Cookies.get("peanutcookie") > 0){
    fullJar.src = "fulljar.jpeg"
  }

  sugarButton.addEventListener("click", function () {
    if (Cookies.get("sugarcookie")){
      var sugarValue = Cookies.get("sugarcookie")
      Cookies.set("sugarcookie", ++sugarValue)
      sugarCount.innerHTML = sugarValue
    }
    else {
      Cookies.set("sugarcookie", 1)
      var sugarValue = Cookies.get("sugarcookie")
      sugarCount.innerHTML = sugarValue
    }
    fullJar.src = "fulljar.jpeg"
  })


  chocolateButton.addEventListener("click", function () {
    if (Cookies.get("chocolatecookie")){
      var chocolateValue = Cookies.get("chocolatecookie")
      Cookies.set("chocolatecookie", ++chocolateValue)
      chocolateCount.innerHTML = chocolateValue
    }
    else {
      Cookies.set("chocolatecookie", 1)
      var chocolateValue = Cookies.get("chocolatecookie")
      chocolateCount.innerHTML = chocolateValue
    }
    fullJar.src = "fulljar.jpeg"
  })

  peanutButton.addEventListener("click", function () {
    if (Cookies.get("peanutcookie")){
      var peanutValue = Cookies.get("peanutcookie")
      Cookies.set("peanutcookie", ++peanutValue)
      peanutCount.innerHTML = peanutValue
    }
    else {
      Cookies.set("peanutcookie", 1)
      var peanutValue = Cookies.get("peanutcookie")
      peanutCount.innerHTML = peanutValue
    }
    fullJar.src = "fulljar.jpeg"
  })

  clearButton.addEventListener("click", function () {
    Cookies.expire("sugarcookie")
    sugarCount.innerHTML = 0
    Cookies.expire("chocolatecookie")
    chocolateCount.innerHTML = 0
    Cookies.expire("peanutcookie")
    peanutCount.innerHTML = 0
    crumbleSpot.innerHTML = "...and that's the way the cookie crumbles!"
    fullJar.src = "emptyjar.jpeg"
  })
})


// var modal= document.getElementById("hidden_modal");
// var closeButton= document.querySelector(".close-button");
//
// var timer = function(){
//   modal.setAttribute('style', 'display:block');
// };
//
// setTimeout(timer, 1000)
//
// closeButton.addEventListener("click", function(){
//   modal.setAttribute('style', 'display:none');
//   modal.style.display = 'none'
// });
//
//
// document.setAttribute('style', 'display:block');
//
// function checkThisModal() {
//   var email = document.querySelector("#Name").value;
//
//   if (true) {
//     alert("Welcome Aboard");
//   } else {
//     alert("Invalid")
//   }
// };
