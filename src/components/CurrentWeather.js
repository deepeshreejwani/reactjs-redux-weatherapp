import React from "react";
import { connect } from "react-redux";

const CurrentWeather = ({ weather, location }) => {
  const kelvinToCelusis = (k) => {
    return (k - 273.15).toFixed(2);
  };
  return (
    <div className="border  mt-3">
      {" "}
      {weather ? (<>
          <p className="h2 text-center">
            {" "}
            {kelvinToCelusis(weather.current.temp)} &deg;C{" "}
          </p>
          <p className="h5 text-center">
            <i className="fas fa-map-marker-alt"> </i>{" "}
            <strong> {location.name} </strong>{" "}
          </p>
          <div className="row mt-4">
            <div className="col-6 text-center">
              <strong>
                {" "}
                {kelvinToCelusis(weather.daily[0].temp.max)} &deg; C {" / "}{" "}
                {kelvinToCelusis(weather.daily[0].temp.min)} &deg; C{" "}
              </strong>{" "}
            </div>{" "}
            <div className="col-6 text-center">
              <p>
                {" "}
                <strong> {weather.current.weather[0].main} </strong>{" "}
              </p>{" "}
            </div>{" "}
          </div></>
      ) : (
        <h1> Loading </h1>
      )}{" "}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    location: state.location,
  };
};

export default connect(mapStateToProps)(CurrentWeather);
