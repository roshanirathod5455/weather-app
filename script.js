function getWeather(){

let city = document.getElementById("city").value

document.getElementById("result").innerHTML =
"Weather for " + city

if(city=="manali"){
document.body.className="snow"
}

if(city=="mumbai"){
document.body.className="rain"
}

if(city=="nagpur"){
document.body.className="sun"
}

}
