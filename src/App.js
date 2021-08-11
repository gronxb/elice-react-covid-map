import logo from './logo.svg';
import './App.css';

import CovidMap from './CovidMap';
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar,Container,Nav, Button} from "react-bootstrap";
import { changeTheme } from './redux/action';

import {BrowserRouter, Link, Route, Switch, useHistory} from "react-router-dom";
import { useEffect } from 'react';

function Header({history}) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">엘리스 코로나</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">소개</Nav.Link>
      <Nav.Link href="/covid">코로나맵</Nav.Link>
    </Nav>
     <Button onClick={() => dispatch(changeTheme(theme === "light"? "dark" : "light"))}>다크모드</Button>
    </Container>
  </Navbar>
  </>
  )
}

function About() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    console.log("theme",theme)
  }, [theme]);

  return (
    <div style={{background: theme === "light" ? "white" : "grey", height: "100vh"}}>
        소개글입니다.
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
        <Header />
        <BrowserRouter>
            <Route path="/" exact>
                <About />
            </Route>
            <Route path="/covid">
              <CovidMap />
            </Route>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
