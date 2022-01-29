import * as React from "react";
import { Header } from "./Header/Header";
import "./Field.less";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Contents } from "./Contents/Contents";
import { Home } from "./Home/Home";
import { Ledge } from "./Ledge/Ledge";
import { Content } from "./Content/Content";

export const Field: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="Field">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Comp" component={Contents} />
            <Route path="/Content" component={Content} />
          </Switch>
        </div>
        <Ledge />
      </div>
    </BrowserRouter>
  );
};
