import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routes = props => {
    return (
        <Router>
            <Switch>
                {/*<Route path="/:state/:city" element={ <Home city={props.city} />} />*/}
                <Route path="/ce/ldc" element={ <Home city={props.city} />} />
            </Switch>
        </Router>
    );
}

export default Routes;