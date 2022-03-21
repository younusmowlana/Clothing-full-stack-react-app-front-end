import styled from 'styled-components';
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
`;

const Categories = () => {
 console.log(categories)  
  return  <Container>
      {categories.map(item=>(
          <CategoryItem item={item}/>
      ))}
  
    </Container>;
    
    //console.log(categories);
};




export default Categories
