import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={routeProps => <Home {...routeProps} />} />
            </Switch>
        </Router>
    )
}

export default App
