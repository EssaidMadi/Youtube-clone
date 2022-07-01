import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { DarkTheme, LightTheme } from "./utils/Theme";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./page/Home";
import Video from "./page/Video";
import SignIn from "./page/SignIn";


const Container = styled.div`
display: flex
`;
const Main = styled.div`
 flex: 7;
 background-color: ${({theme}) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [Darkmode, setDarkmode] = useState(true);
  return (
    <ThemeProvider theme={Darkmode ? DarkTheme : LightTheme}>
    <Container>
      <BrowserRouter>
        <Menu Darkmode = {Darkmode} setDarkmode = {setDarkmode}/>
        <Main>
          <Navbar/>
          <Wrapper>
            <Routes>
              <Route path="/">
                <Route index element={<Home/>} />
                <Route path="signin" element={<SignIn/>} />
                <Route path="video">
                  <Route path=":id" element={<Video/>} />
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
