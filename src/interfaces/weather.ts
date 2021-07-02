export interface WeatherError {
    cod: string
    message: string
}

export interface WeatherData {
    coord: _Coordinates
    weather: _Weather[]
    base: string
    main: _Main
    visibility: number
    wind: _Wind
    clouds: _Clouds
    dt: number
    sys: _Sys
    timezone: number
    id: number
    name: string
    cod: number
}

interface _Coordinates {
    lon: number
    lat: number
}

interface _Weather {
    id: number
    main: string
    description: string
    icon: string
}

interface _Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
}

interface _Wind {
    speed: number
    deg: number
    gust: number
}

interface _Clouds {
    all: number
}

interface _Sys {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
}

//export type WeatherData = WeatherReport & WeatherError
