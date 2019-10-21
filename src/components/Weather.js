import React from 'react';

const Weather = props => {
    const {temperature, city, country, humidity, description, error} = props.weather
    return (
        <div>
            {city && country && <p><span className="colored">Location: </span>{city}, {country}</p>}
            {temperature && <p><span className="colored">Temperature: </span>{temperature}</p>}
            {humidity &&<p><span className="colored">Humidity: </span>{humidity}</p>}
            {description && <p><span className="colored">Conditions: </span>{description}</p>}
            {error && <p><span className="colored">{error}</span></p>}
        </div>
    )
};


export default Weather;
