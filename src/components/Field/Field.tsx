import * as React from "react";
import { Header } from "./Header/Header";
import "./Field.less";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Contents } from "./Contents/Contents";
import { Home } from "./Home/Home";
import { Ledge } from "./Ledge/Ledge";
import { Content } from "./Content/Content";
import { Shredder } from "./Shredder/Shredder";
import { Printer } from "./Printer/Printer";
import { Contact } from "./Contact/Contact";
import { Waste } from "./Waste/Waste";

export const Field: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="Field">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Drtice" component={Shredder} />
            <Route path="/Odpady" component={Waste} />
            <Route path="/3Dtisk" component={Printer} />
            <Route path="/Kontakty" component={Contact} />
          </Switch>
        </div>
        <Ledge />
      </div>
    </BrowserRouter>
  );
};
