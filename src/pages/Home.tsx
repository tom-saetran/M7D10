import React from "react"
import { Row, Col, Form, InputGroup, FormControl, Button, Container } from "react-bootstrap"
import { RouteComponentProps } from "react-router"
import * as Icon from "react-bootstrap-icons"
import { WeatherData } from "../interfaces/weather"
import Results from "../components/Results"

interface Props extends RouteComponentProps {}

const Home = (props: Props) => {
    const weatherIcons = [
        <Icon.Sun />,
        <Icon.Cloud />,
        <Icon.Clouds />,
        <Icon.CloudDrizzle />,
        <Icon.CloudFog />,
        <Icon.CloudFog2 />,
        <Icon.CloudHail />,
        <Icon.CloudHaze />,
        <Icon.CloudHaze1 />,
        <Icon.CloudLightning />,
        <Icon.CloudLightningRain />,
        <Icon.CloudMoon />,
        <Icon.CloudRain />,
        <Icon.CloudRainHeavy />,
        <Icon.CloudSleet />,
        <Icon.CloudSnow />,
        <Icon.CloudSun />,
        <Icon.Lightning />,
        <Icon.Moon />,
        <Icon.Snow />,
        <Icon.Tornado />,
        <Icon.Tsunami />,
        <Icon.Wind />
    ]

    const [location, setLocation] = React.useState<string>("")
    const [weather, setWeather] = React.useState<WeatherData>()

    const getLocation = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const result = await fetch(process.env.REACT_APP_SEARCH_ENDPOINT + location + `&appid=${process.env.REACT_APP_WEATHER_API}`)
            if (result.ok) {
                const data: WeatherData = await result.json()
                setWeather(data)
            } else throw new Error("Failed to fetch location")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Container>
            <Row>
                <Col className="pt-2" md={{ span: 6, offset: 3 }}>
                    <Form style={{ padding: "0 0.333rem" }} onSubmit={e => getLocation(e)}>
                        <Form.Text>Weather, weather, in the sky. How will it be today?</Form.Text>
                        <Form.Row className="align-items-center">
                            <Form.Label htmlFor="weatherForm" srOnly>
                                Weather Location
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <FormControl
                                    id="weatherForm"
                                    onChange={e => setLocation(e.target.value)}
                                    value={location}
                                    placeholder="Where do you want the weather to exist?"
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text as={Button} type="submit">
                                        {weatherIcons[Math.round(Math.random() * (weatherIcons.length - 1))]}
                                    </InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                {weather && (
                    <Col md={{ span: 6, offset: 3 }}>
                        <Results weather={weather} />
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default Home
