import Home from "./Pages/Home";
import styled from 'styled-components';

const Container = styled.div`
width:100%;
height:100%;
background-color: red;
`;

const App = () => {
  return (<><Home/>
  
  <Container>styled</Container>
  
  </>);
};

export default App;