import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
// import axios from "axios";
// import React,{useEffect,useLayoutEffect,useState} from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link,useHistory } from "react-router-dom";
import {useState,useEffect} from 'react'
// import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
const history = useHistory()


   const [data, setData] = useState(null);

   useEffect(()=>{
     const data = JSON.parse(localStorage.getItem("currentUser"))
     console.log("data")
     console.log(data)
     setData(data)
   },[])
  // console.log(data)
  // useEffect(async()=>{
  //   const response =await axios.get('https://jsonplaceholder.typicode.com/posts')
  //  // console.log(response)
  //   setData(response.data)
  //   },[])
  const {quantity} = useSelector(state=>state.cart)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SHARP.</Logo>
        </Center>
        <Right>
          { data === null ? (<>
            <Link to={"/register"} style={{ textDecoration: 'none' }}>
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to={"/login"}  style={{ textDecoration: 'none' }}>
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          </>) : (<>
            {/* <Link to={"/register"} style={{ textDecoration: 'none' }}>
          <MenuItem>REGISTER</MenuItem>
          </Link> */}
          {/* <Link to={"/login"}  style={{ textDecoration: 'none' }}> */}
          <MenuItem onClick={()=>{
            localStorage.clear()
            history.push("/login")
          }}>LOGOUT</MenuItem>
          <MenuItem>{data.username}</MenuItem>
          
          </>)}
          <MenuItem>
          <Link to={"/cart"}>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;