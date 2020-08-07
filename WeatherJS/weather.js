class Weather {
    constructor(city, state) {
        this.apiKey = '11763bc0fb0cf1d8cf64f9f9d70879a1';
        this.city = city;
        this.state = state;
    }

    //Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`)
        //const response = await fetch(`https://samples.openweathermap.org/data/2.5/weather?id="1277333"&appid=${this.apiKey}`)
        
        const responseData = await response.json();
        //console.log(responseData);
        return responseData;
    }

    //Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}