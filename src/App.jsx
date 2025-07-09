import DefaultLayout from "./components/layaout/DefaultLayout";
import routes from "./router/routes";
import { BrowserRouter, useRoutes } from "react-router-dom";
import "../src/scss/app.scss";

const Router = () => {
  return useRoutes(routes);
};

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
