import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
 

const CardStyle = styled.div`
border: 1.5px solid rgb(196, 193, 193);
display: grid;
gap: 0.7rem 0.7rem;
background-color: white;
box-shadow: 1px 2px rgb(196, 193, 193);
margin-bottom: 6px;
border-radius: 4px;

.delete{
  float:right;      
}

.edit{
    float:right; 
}

.expiry{
    left: 52%;
    position: relative;
}

@media only screen and (max-width: 790px) {
  .expiry{
    left: 40%;
    position: relative;
}

@media only screen and (max-width: 637px) {
  .expiry{
    left: 10%;
    position: relative;
}
}

`;




const Card = ({
  id,
  cardOwnerName,
  cvc,
  expiry,
  cardNumber,
  handleRemoveCard
}) => {
  const history = useHistory();
  const dd = expiry.slice(0,2);
  const mm = expiry.slice(2,4);

  return (
    
    <CardStyle>
      <div>
        
      <div className='name'>{cardOwnerName} 
      <button className='delete buttonDelete' onClick={() => handleRemoveCard(id)}> Delete</button> </div>
       </div>    

       <div>
       <div>
       {cardNumber} 
       <span className='expiry'>{dd}/{mm} </span>  
       <button className='edit buttonEdit' onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </button> </div> 
       </div>
     
    </CardStyle>
  );
};

export default Card;
