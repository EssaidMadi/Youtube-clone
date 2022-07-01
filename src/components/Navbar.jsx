import React from 'react';
import styled from 'styled-components';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";



const Container = styled.div`
  position: sticky;
  top: 0px;
  background-color: ${({theme}) => theme.bgLighter};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
const Searche = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  aligne-items: center;
  justify-content: space-between;
  padding 3px;
  border: 1px solid #ccc;
  border-radius: 3px;

  `;

const Input = styled.input`
  border: none;
  background-color: transparent;
`;
const Button = styled.button`
  padding 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radiys: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Searche>
          <Input placeholder="Search"/>
          <SearchOutlinedIcon/>
        </Searche>
          <Button> <AccountCircleOutlinedIcon/> SIGN IN
          </Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar