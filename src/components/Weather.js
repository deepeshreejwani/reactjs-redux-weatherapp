import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherAndLocation } from '../actions';

import Header from './Header';
import CurrentWeather from './CurrentWeather';
const Weather = ({ weather, location, fetchWeatherAndLocation}) => {
  useEffect(() => {
    fetchWeatherAndLocation('Delhi');
  }, [fetchWeatherAndLocation]);
  const renderWeather = () => {
    if (Object.keys(weather).length !== 0 && Object.keys(location).length !== 0) {
      return (
        <div className="mb-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 order-md-1 container">
              <CurrentWeather/>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <Header />
      <div className="">{renderWeather()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { weather: state.weather, location: state.location };
};

export default connect(mapStateToProps, { fetchWeatherAndLocation })(Weather);
