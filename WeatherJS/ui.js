class UI{
constructor(){
    this.location=document.getElementById('w-location');
    this.desc=document.getElementById('w-desc');
    this.string=document.getElementById('w-string');
    this.details=document.getElementById('w-details');
    this.icon=document.getElementById('w-icon');
    this.feelsLike=document.getElementById('w-feelsLike');
    this.humidity=document.getElementById('w-humidity');
    this.pressure=document.getElementById('w-dewpoint');
    this.wind=document.getElementById('w-wind');

}
paint(weather){
this.location.textContent=weather.name;
this.desc.textContent=weather.weather[0].description;
this.string.textContent=weather.main.temp;
this.icon.setAttribute('src',weather.weather[0].icon);
this.humidity.textContent=`Relative Humidity: ${weather.main.humidity}`;
this.feelsLike=`Feels Like: ${weather.weather[0].main}`;
this.pressure.textContent=`Pressure: ${weather.main.pressure}`;
this.wind.textContent=`Wind: ${weather.wind.speed}`;

}
}