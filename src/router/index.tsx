import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import routes from "./routes";
import DashboardPage from "~/pages/Dashboard";
import NewUserPage from "~/pages/NewUser";

export const AppRoutes = () => (
  <Switch>
    <Route exact path={routes.dashboard} component={DashboardPage} />
    <Route exact path={routes.newUser} component={NewUserPage} />
    <Route
      exact
      path={routes.history}
      component={() => <div>History</div>}
    />

    <Route exact path="*">
      <Redirect to={routes.dashboard} />
    </Route>
  </Switch>
)

const Router = () => {
  return (
    <div style={{ marginTop: 64 }}>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </div>
  );
};

export default Router;
