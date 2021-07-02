import { Card } from "react-bootstrap"
import { WeatherData } from "../interfaces/weather"

interface Props {
    weather: WeatherData
}

const Results = ({ weather }: Props) => {
    return (
        <Card>
            <Card.Header className="">
                Forecast for:
                <span className="ml-3">
                    <strong>{weather.name}</strong>
                </span>
            </Card.Header>
            <Card.Body>
                <div>{(weather.main.temp - 273.15).toFixed(1)}°C</div>
            </Card.Body>
        </Card>
    )
}

export default Results
