function dateArea(){
  var dateDay = new Date().getDate();
  var d = new Date();
  var dateMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var dateName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
  document.querySelector(".day").innerHTML=dateDay;
  document.querySelector(".month").innerHTML=dateMonth[d.getMonth()];
  document.querySelector(".day-name").innerHTML=dateName[d.getDay()];
}

setInterval(dateArea, 1000);

function clockArea(){
  var hoursArea = new Date().getHours();
  var minutesArea = new Date().getMinutes();
  var clockArea = hoursArea + ":" + minutesArea;
  
  if(hoursArea<10){
    var clockArea = "0" + hoursArea + ":" + minutesArea;
  } else if(minutesArea<10){
    var clockArea = hoursArea + ":0" + minutesArea;
  } else{
    var clockArea = hoursArea + ":" + minutesArea;
  }
  document.querySelector(".clock-area").innerHTML = clockArea;
}

setInterval(clockArea, 1000);

var ntf = document.querySelector(".bell");
var ntfBell = document.querySelector(".sound");
var ntfBellSlash = document.querySelector(".quiet");
var dynamicIsland = document.querySelector(".dynamic-island");
var bellAnmArea = document.querySelector(".bell-animation-area");
var bellAnm = document.querySelector(".bell-animation");

ntf.addEventListener("click", function(){
  if(ntfBellSlash.style.display !== "inline"){
    ntfBellSlash.style.display="inline";
    ntfBell.style.display="none";
    bellAnmArea.style.display="block";
    bellAnm.style.display="block";
    document.querySelector(".ntf-1").style.display="inline";
    document.querySelector(".ntf-2").style.display="none";
    setTimeout("bellAnmArea.style.display='none'", 7000);
    setTimeout("bellAnm.style.display='none'", 5000);
    geoIcon.classList.add("hide")
    document.querySelector(".bi-soundwave").classList.add("hide")
    setTimeout("document.querySelector('.bi-soundwave').style.visibility='visible'", 6000);
    setTimeout("document.querySelector('.bi-soundwave').style.opacity='1'", 6000);
  }
  
  else {
    ntfBellSlash.style.display="none";
    ntfBell.style.display="inline";
    bellAnmArea.style.display="block";
    bellAnm.style.display="block";
    document.querySelector(".ntf-1").style.display="none";
    document.querySelector(".ntf-2").style.display="inline";
  }
})

var spotify = document.querySelector(".spotify");
spotify.addEventListener("click", function(){
  if(document.querySelector(".music-player").style.visibility !== "visible"){
    document.querySelector(".music-player").style.visibility = "visible"
    document.querySelector(".music-player").style.opacity = "1"
    document.querySelector(".music-player").style.transform = "translateY(190px)"
    document.querySelector(".spotify").style.color="#1ED760";
    fuelArea.style.visibility="hidden";
    fuelArea.style.bottom="100px";
    fuelArea.style.opacity="0";
    fuelWidgetIcon.style.color="white";
  } else{
      document.querySelector(".spotify").style.color="white";
      document.querySelector(".music-player").style.transform = "translateY(0)"
      document.querySelector(".music-player").style.visibility = "hidden"
      document.querySelector(".music-player").style.opacity = "0"
  }
})

var dynamicVolume = document.querySelector(".bi-soundwave");
dynamicVolume.addEventListener("click", function(){
  if(document.querySelector(".music-player").style.visibility !== "visible"){
    document.querySelector(".music-player").style.visibility="visible";
    document.querySelector(".spotify").style.color="#1ED760";
    document.querySelector(".music-player").style.marginTop="20px";
    document.querySelector(".music-player").style.opacity="1";
    document.querySelector(".notification").style.display="none";
    document.querySelector(".flashandcamera").style.display="none";
    fuelArea.style.visibility="hidden";
  } else{
      document.querySelector(".music-player").style.visibility="hidden";
      document.querySelector(".spotify").style.color="white";
      document.querySelector(".music-player").style.marginTop="0px";
      document.querySelector(".music-player").style.opacity="0";
      document.querySelector(".notification").style.display="block";
      document.querySelector(".flashandcamera").style.display="block";
  }
})

var geoIcon = document.querySelector(".bi-geo-alt-fill");
var fuelArea = document.querySelector(".fuelarea");
var fuelWidgetIcon = document.querySelector(".fuelWidgetIcon");

fuelWidgetIcon.addEventListener("click", function(){
  if(fuelArea.style.visibility !== "visible"){
    fuelArea.style.visibility="visible";
    fuelArea.style.opacity="1";
    fuelArea.style.bottom="110px";
    geoIcon.style.right="93px";
    geoIcon.style.visibility="visible";
    geoIcon.style.opacity="1";
    dynamicIsland.style.left="83px";
    document.querySelector(".dynamic-island-camera").style.right="125px";
    document.querySelector(".bi-soundwave").style.left="100px";
    fuelWidgetIcon.style.color="red";
    document.querySelector(".music-player").style.visibility="hidden";
    document.querySelector(".music-player").style.marginTop="0px";
    document.querySelector(".music-player").style.opacity="0";
    document.querySelector(".spotify").style.color="white";
  } else{
    fuelArea.style.visibility="hidden";
    fuelArea.style.opacity="0";
    fuelArea.style.bottom="100px";
    geoIcon.style.right="100px";
    geoIcon.style.visibility="hidden";
    geoIcon.style.opacity="0";
    dynamicIsland.style.left="100px";
    document.querySelector(".dynamic-island-camera").style.right="110px";
    document.querySelector(".bi-soundwave").style.left="120px";
    fuelWidgetIcon.style.color="white";
  }
})


var line = document.querySelector(".line");

line.addEventListener("click", function(){
  if(document.querySelector(".line").style.visibility !== "visible"){
    line.style.bottom="30px";
    line.style.opacity="0";
    document.querySelector(".flashandcamera").style.opacity="0";
    document.querySelector(".flashandcamera").style.visibility="hidden";
    document.querySelector(".spotify").style.opacity="0";
    document.querySelector(".spotify").style.visibility="hidden";
    document.querySelector(".clock-area").style.opacity="0";
    document.querySelector(".clock-area").style.visibility="hidden";
    document.querySelector(".widgetarea").style.opacity="0";
    document.querySelector(".widgetarea").style.visibility="hidden";
    document.querySelector(".date-area").style.opacity="0";
    document.querySelector(".date-area").style.visibility="hidden";
    
    document.querySelector(".home").style.visibility="visible";
    document.querySelector(".home").style.opacity="1";
    document.querySelector(".home").style.transform ="translateY(-60px)";
  }
})

let fond = document.querySelector(".fond")
var imgcalc = document.querySelector(".imgcalc");

imgcalc.addEventListener("click", function(){
  if(document.querySelector(".calculator").style.visibility !== "visible"){
    document.querySelector(".home").style.visibility= "hidden";
    document.querySelector(".imgcalc").style.visibility= "hidden";
    document.querySelector(".calculator").style.visibility= "visible";
    document.getElementById("linecalc").style.visibility= "visible";
    fond.style.visibility = "hidden";
    fond.style.opacity = "0"
  }
})

linecalc.addEventListener("click", function() {
  document.getElementById('calculator').style.visibility="hidden";
  document.getElementById("linecalc").style.visibility= "hidden";
  document.querySelector(".home").style.visibility= "visible";
  document.querySelector(".imgcalc").style.visibility= "visible";
  fond.style.visibility = "visible";
  fond.style.opacity = "1"
})

var imgtel = document.querySelector(".imgtel");


imgtel.addEventListener("click", function(){
  if(document.querySelector(".fav").style.visibility !== "visible" && document.querySelector(".categ").style.visibility!== "visible"){
    document.querySelector(".home").style.visibility= "hidden";
    document.querySelector(".imgcalc").style.visibility= "hidden";
    document.querySelector(".fav").style.visibility= "visible";
    document.querySelector(".categ").style.visibility= "visible";
    document.getElementById("linetel").style.visibility= "visible";
  }
  
})

linetel.addEventListener("click", function() {
  document.getElementById('fav').style.visibility="hidden";
  document.querySelector('.categ').style.visibility="hidden";
  document.getElementById("linetel").style.visibility= "hidden";
  document.querySelector(".home").style.visibility= "visible";
  document.querySelector(".imgcalc").style.visibility= "visible";
})

var imgtel = document.querySelector(".imgtel2");

imgtel.addEventListener("click", function(){
  if(document.querySelector(".fav").style.visibility !== "visible" && document.querySelector(".categ").style.visibility!== "visible"){
    document.querySelector(".home").style.visibility= "hidden";
    document.querySelector(".imgcalc").style.visibility= "hidden";
    document.querySelector(".fav").style.visibility= "visible";
    document.querySelector(".categ").style.visibility= "visible";
    document.getElementById("linetel").style.visibility= "visible";
  }
})

var wlb=document.getElementById("wlb");
var oynat=document.getElementById("oynat");
var ses=document.getElementById("ses");

//What to do when you hit the play button
oynat.onclick=function(){
  if(wlb.paused){
    wlb.play();
    document.querySelector(".bi-pause-fill").style.display="inline";
    document.querySelector(".bi-play-fill").style.display="none";
    document.querySelector(".music-poster").style.transform="scale(1)";
    document.querySelector(".bi-soundwave").style.display="block";
  } else{
    wlb.pause();
    document.querySelector(".bi-pause-fill").style.display="none";
    document.querySelector(".bi-play-fill").style.display="inline";
    document.querySelector(".music-poster").style.transform="scale(.9)";
    document.querySelector(".bi-soundwave").style.display="none";
  }
}

const item = document.querySelectorAll('.item');
const result_span = document.querySelectorAll('.result span');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for(let i=0; i < item.length; i++){
  item[i].addEventListener('click', (e) => {
    let atr = e.target.getAttribute('value');
    if(isFirstValue === false) {
      getFirstValue(atr)
    }
  })
}

function getFirstValue(el) {
  result_span.innerHTML = "";
  firstValue += el;
  result_span.innerHTML = firstValue;
  firstValue = +firstValue;
}


//what to do when range object is changed for audio setting
/* ses.oninput=function(){
  wlb.volume =ses.value/100;
}
*/
//Update range object when volume is changed from control
wlb.onvolumechange=function(){
  ses.value=wlb.volume*100;
}

const btn = document.querySelector('.btn')
const Missed = document.querySelector('.Missed')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const lock = document.querySelector('.lock')
const lune = document.querySelector('.lune')
const parta = document.querySelector('.parta')
const lum = document.querySelector('.lum')
const crono = document.querySelector('.crono')
const calcu = document.querySelector('.calcu')
const tower = document.querySelector('.fa-tower-broadcast')
const plane = document.querySelector('.fa-plane')
const wifi = document.querySelector('.fa-wifi')
const bluetooth = document.querySelector('.fa-bluetooth-b')
const camer = document.querySelector('.camer')
  



window.onload = function () {
  var el = document.getElementById("operator-icons");
  el.style.cursor = "pointer";
  el.onclick = navgere;
}


function navgere() {  
  document.querySelector('.nav').style.visibility="visible";
  document.querySelector('.nav').style.opacity="1";
  document.querySelector('.nav').style.bottom="0%";
  document.querySelector('.homescreen').style.opacity="0.10";
  document.getElementById('operator-icons').style.zIndex="9999999";
  document.getElementById('linenav').style.opacity="1";
  document.getElementById('linenav').style.visibility="visible";
  document.getElementById('linenav').style.zIndex="9999999";
}

window.onload = function () {
  var ele = document.getElementById("linenav");
  ele.style.cursor = "pointer";
  ele.onclick = linegere;
}


function linegere() {  
  document.querySelector('.linenav').style.visibility="hidden";
  document.querySelector('.nav').style.visibility="hidden";
  document.querySelector('.homescreen').style.opacity="1";
}

function appendNumber(number) {
  var numberDisplay = document.getElementById("number-display");
  numberDisplay.value += number;
}

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    let value = e.target.innerText;
    if (value === '=') {
      display.innerText = eval(display.innerText);
    } else {
      display.innerText += value;
    }
  });
});



const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', e => {
  display.innerText = '';
});


const percentButton = document.querySelector('.percent');
percentButton.addEventListener('click', e => {
  let value = display.innerText;
  display.innerText = eval(value) / 100;
});









const fondrec = document.getElementById("fond-rec");
const contrev = document.getElementById("container-rec");
var compte = 0

contrev.addEventListener("click", function() {
  if(compte !== "1") {
  fondrec.style.left = "60px";
  compte = "1";
  } else {
  fondrec.style.left = "0px";
  compte = "0";

  }
});

const star = document.getElementById("star");
const clock = document.getElementById("clock");
const address = document.getElementById("address");
const keyboard = document.getElementById("keyboard");
const voicemail = document.getElementById("voicemail");

star.addEventListener("click", function() {
  document.getElementById("rec").style.visibility="hidden";
  document.getElementById("contact").style.visibility="hidden";
  document.getElementById("appel").style.visibility="hidden";
  document.getElementById("voice").style.visibility="hidden";
  document.getElementById("fav").style.visibility="visible";
});
clock.addEventListener("click", function() {
  document.getElementById("rec").style.visibility="visible";
  document.getElementById("contact").style.visibility="hidden";
  document.getElementById("appel").style.visibility="hidden";
  document.getElementById("voice").style.visibility="hidden";
  document.getElementById("fav").style.visibility="hidden";
  document.getElementById("rec").style.left="-440px";  
});
address.addEventListener("click", function() {
  document.getElementById("rec").style.visibility="hidden";
  document.getElementById("contact").style.visibility="visible";
  document.getElementById("appel").style.visibility="hidden";
  document.getElementById("voice").style.visibility="hidden";
  document.getElementById("fav").style.visibility="hidden";
  document.getElementById("contact").style.left="-700px";  
});
keyboard.addEventListener("click", function() {
  document.getElementById("rec").style.visibility="hidden";
  document.getElementById("contact").style.visibility="hidden";
  document.getElementById("appel").style.visibility="visible";
  document.getElementById("voice").style.visibility="hidden";
  document.getElementById("fav").style.visibility="hidden";
  document.getElementById("appel").style.left="-1100px";  
});
voicemail.addEventListener("click", function() {
  document.getElementById("rec").style.visibility="hidden";
  document.getElementById("contact").style.visibility="hidden";
  document.getElementById("appel").style.visibility="hidden";
  document.getElementById("voice").style.visibility="visible";
  document.getElementById("fav").style.visibility="hidden";
});

