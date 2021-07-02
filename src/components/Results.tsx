import { Card } from "react-bootstrap"
import { WeatherData } from "../interfaces/weather"

interface Props {
    weather: WeatherData
}

const Results = ({ weather }: Props) => {
    const layer = "temp_new"
    const zoomLevel = 10
    const lon = weather && Math.abs(Math.round(weather.coord.lon * zoomLevel))
    const lat = weather && Math.abs(Math.round(weather.coord.lat * zoomLevel))

    return (
        <Card>
            <Card.Header className="d-flex align-items-center bg-white">
                Forecast for:
                <span className="ml-3">
                    <strong>{weather.name}</strong>
                </span>
                <img
                    className="ml-auto"
                    alt=""
                    title={weather.weather[0].main}
                    width={32}
                    height={32}
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                />
                <div>{(weather.main.temp - 273.15).toFixed(1)}°C</div>
            </Card.Header>
            <Card.Body>
                <Card.Img src={`https://tile.openweathermap.org/map/${layer}/${zoomLevel}/${lon}/${lat}.png?appid=${process.env.REACT_APP_WEATHER_API}`} />
            </Card.Body>
        </Card>
    )
}

export default Results
