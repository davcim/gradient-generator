var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomize = document.querySelector("#generateRandomColorHex");
var darkBG = document.querySelector("#generateDarkColorHex");
var lightBG = document.querySelector("#generateLightColorHex");

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, "
		+ color1.value 
		+ ", "
		+ color2.value 
		+ ")";

		css.textContent = body.style.background + ";";
}

function generateRandomColorHex() {
	var RandomColor1 = "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
	var RandomColor2 = "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);

	body.style.background = 
		"linear-gradient(to right, "
		+ RandomColor1 
		+ ", "
		+ RandomColor2 
		+ ")";

		css.textContent = body.style.background + ";";
		color1.value = RandomColor1;
		color2.value = RandomColor2;
}

function generateDarkColorHex() {
  var DarkColor1 = "#";
  for (let i = 0; i < 3; i++)
    DarkColor1 += ("0" + Math.floor(Math.random() * Math.pow(16, 2) / 2).toString(16)).slice(-2);
  // return DarkColor1;

  var DarkColor2 = "#";
  for (let i = 0; i < 3; i++)
    DarkColor2 += ("0" + Math.floor(Math.random() * Math.pow(16, 2) / 2).toString(16)).slice(-2);
  // return DarkColor2;

  body.style.background = 
		"linear-gradient(to right, "
		+ DarkColor1 
		+ ", "
		+ DarkColor2 
		+ ")";

		css.textContent = body.style.background + ";";
		color1.value = DarkColor1;
		color2.value = DarkColor2;
}

function generateLightColorHex() {
  let LightColor1 = "#";
  for (let i = 0; i < 3; i++)
    LightColor1 += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
  // return color;
  let LightColor2 = "#";
  for (let i = 0; i < 3; i++)
    LightColor2 += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
  // return color;

  body.style.background = 
		"linear-gradient(to right, "
		+ LightColor1 
		+ ", "
		+ LightColor2 
		+ ")";

		css.textContent = body.style.background + ";";
		color1.value = LightColor1;
		color2.value = LightColor2;
}


function copyToClipboard(var1){
    let val = document.getElementById(var1).innerHTML;
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    alert("Gradient copied to clipboard!");
  }  


css.textContent = addEventListener("load", setGradient);
color1.addEventListener("input", setGradient);	
color2.addEventListener("input", setGradient);
randomize.addEventListener("click", generateRandomColorHex);
darkBG.addEventListener("click", generateDarkColorHex);
lightBG.addEventListener("click", generateLightColorHex);
