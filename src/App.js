import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { DarkTheme, LightTheme } from "./utils/Theme";


const Container = styled.div`
display: flex
`;
const Main = styled.div`
 flex: 7;
 background-color: ${({theme}) => theme.bg};
`;
const Wrapper = styled.div``;
function App() {
  const [Darkmode, setDarkmode] = useState(true);
  return (
    <ThemeProvider theme={Darkmode ? DarkTheme : LightTheme}>
    <Container>
        <Menu Darkmode = {Darkmode} setDarkmode = {setDarkmode}/>
        <Main>
          <Navbar/>
          <Wrapper>
            video Cards
          </Wrapper>
        </Main>
    </Container>
    </ThemeProvider>
  );
}

export default App;
