import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import OffersPage from "./OffersPage";

export default function Routes() {
    return (
        <Router>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/offers" component={OffersPage}/>
        </Switch>
    </Router>
    )
}
