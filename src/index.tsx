import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import 'antd/dist/antd.min.css';
import { Analytics } from "@vercel/analytics/react";
import Router from "./router";
import i18n from "./translation";

const App = () => (
  <BrowserRouter>
    <Analytics />
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
