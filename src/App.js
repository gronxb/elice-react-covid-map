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
      {/* 
          Nav.Link에서는 a 태그를 포함하기 때문에 새로고침을 막기 위해 e.preventDefault()
          react-router-dom에서 Link를 가져와 링크를 변경해도 SPA 특성 유지하면서 새로고침은 안하게 함.
      */}
      <Nav.Link href="/" onClick={e => e.preventDefault()}><Link to="/">소개</Link></Nav.Link>
      <Nav.Link href="/covid" onClick={e => e.preventDefault()}><Link to="/covid">코로나맵</Link></Nav.Link>
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
        <BrowserRouter>
            {/* 
              Header 내에서도 Link 컴포넌트를 사용하기 위해 BrowsetRouter에 포함.
              Header 컴포넌트는 Route에 감싸주지 않았기 때문에 어떤 경로에도 고정으로 적용
            */}
            <Header />
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
