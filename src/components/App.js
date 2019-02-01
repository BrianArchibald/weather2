import React from "react";
import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";

const API_KEY = "32ebc86efd4714fb9ea0f0aa950118d0";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const response = await api_call.json();
    console.log(response);
  };

  render() {
    return (
      <div>
        <Titles />
        <Form loadWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}
export default App;
