import React, { useContext } from 'react';
import Card from './Card';
import CardContext from '../context/CardContext';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
 

const CardFormStyles = styled.div`
.add-credit-card-button{
  margin-left: 80%;  
  height: 2em;
  width: 8em;
}

.credit-card-list-title{
  margin-top:1.5em;
  font-size:25px;
  font-weight: bolder;
}
`;

const CardList = () => {
const { list, setList} = useContext(CardContext);


  const handleRemoveCard = (id) => {
    setList(list.filter((data) => data.id !== id));
  };

  return (
    <React.Fragment>
      
<CardFormStyles>      
  
   <div>
       <div className='credit-card-list-title'>List of Credit Cards</div>
       <br />

<NavLink to="/add" >
   <div><button className='add-credit-card-button buttonEdit'> Add Credit Card</button></div>
  </NavLink>
       </div>

        <div>
        {(list.length>0) ? (
          list.map((data) => (
            <Card key={data.id} {...data} handleRemoveCard={handleRemoveCard} />
          ))
        ) : (
          <p>No card available. Please add some cards.</p>
        )}
        </div></CardFormStyles>

    </React.Fragment>
  );
};

export default CardList;
