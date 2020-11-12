import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Presentational
import Header from "./components/Header";
import screens from "./screens";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="my-3">
        <Container>
          <Route exact path="/" component={screens.Home} />
          <Route path="/login" component={screens.Login} />
          <Route path="/register" component={screens.Register} />
          <Route path="/profile" component={screens.Profile} />
        </Container>
      </main>
    </BrowserRouter>
  );
};

export default App;
