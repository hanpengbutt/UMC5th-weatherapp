import styled from 'styled-components';
import formatTemp from '../utils/formatTemp';
import API_URL from '../constants/apiUrl';

const WeatherResult = ({
  cityName,
  temp,
  img,
  setCityName,
  setWeatherData,
}) => {
  const handlerClickClear = () => {
    setCityName('');
    setWeatherData(null);
  };
  return (
    <WeatherResultContainer>
      <CityName>{cityName}</CityName>
      <Temp>{formatTemp(temp)}°C</Temp>
      <WeatherImg src={API_URL.icon(img)} />
      <Clear onClick={handlerClickClear}>Clear</Clear>
    </WeatherResultContainer>
  );
};

const WeatherResultContainer = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 10px;
  border: 1px solid gray;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WeatherImg = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: -12px;
  left: 0px;
`;

const CityName = styled.div`
  font-size: 32px;
`;
const Temp = styled.div`
  font-size: 60px;
`;

const Clear = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 24px;
  cursor: pointer;
`;

export default WeatherResult;
