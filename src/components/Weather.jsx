import { useState } from 'react';
import axios from 'axios';
import API_URL from '../constants/apiUrl';
import styled from 'styled-components';
import WeatherResult from './WeatherResult';

const Weather = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handlerCityNameChange = (event) => {
    setCityName(event.target.value);
  };

  const handlerFormSubmit = async (event) => {
    event.preventDefault();
    axios
      .get(API_URL.temp(cityName))
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        alert('정확한 도시 이름을 입력하세요.');
      });
  };

  return (
    <form onSubmit={handlerFormSubmit}>
      <Input
        type='text'
        value={cityName}
        placeholder='도시를 입력하세요.'
        onChange={handlerCityNameChange}
      />
      {weatherData && (
        <WeatherResult
          cityName={weatherData.name}
          temp={weatherData.main.temp}
          img={weatherData.weather[0].icon}
          setCityName={setCityName}
          setWeatherData={setWeatherData}
        />
      )}
    </form>
  );
};

const Input = styled.input`
  width: 220px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid gray;
  padding: 0px 8px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

export default Weather;
