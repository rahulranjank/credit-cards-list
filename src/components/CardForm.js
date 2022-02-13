import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CardFormStyles = styled.div`
  .credit-card {
    text-align: center;
    border: 2px solid white;
    box-shadow: 1px 2px rgb(196, 193, 193);
  }
  
  input {
    margin-top: 1%;
    margin-left: 1%;
    font-family: Montserrat, sans-serif;
    padding: 0.5%;
  }

  .back {
    background-color: white;
    color: black;
    border: 2px solid black;
    margin-bottom: 20px;
  }

  .headingCredit {
    padding-bottom: 25px;
    padding-left: 10%;
    padding-top: 25px;
    font-size: 20px;
    font-weight: bolder;
  }

  .small-digit{
    width: 25%;
  }
  
  .big-digit{
    width: 100%;
  }

  
input {
  margin-top: 1%;
  margin-left: 1%;
  font-family: Montserrat, sans-serif;
  padding: 0.5%;
}

  .containers {
    max-width: 700px;
    height: 50%;
    width: 50%;
    margin: auto;
}
  form{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
  }

  form .card-details {
    width:calc(80%/2 - 20px);
  }

  .buttonSubmit{
    margin-left: 45%;
    width: 25%;
    height: 2em;
    }
 
`;

const CardForm = (props) => {
  const {setIsEdit} = props ;
  const {isEdit} = props ;
  
  const [card, setCard] = useState(() => {
    return {
      cardOwnerName: props.card ? props.card.cardOwnerName : "",
      cvc: props.card ? props.card.cvc : "",
      cardNumber: props.card ? props.card.cardNumber : "",
      expiry: props.card ? props.card.expiry : "",
    };
  });

  const [focus, setFocus] = useState("");

  const { cardOwnerName, cvc, expiry, cardNumber } = card;

  function handleFocus(e) {
    setFocus(e.target.name);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    

    if (
      cardOwnerName.length > 0 &&
      cvc.length === 3 &&
      expiry.length === 4 &&
      cardNumber.length === 16
    ) {
      const card = {
        id: uuidv4(),
        cardOwnerName,
        cvc,
        expiry,
        cardNumber,
      };
      props.handleOnSubmit(card);
      setIsEdit(false);
    } else {
      alert("Data entered is incorrect");
    }
  };
  const hid = <span style={{ visibility: 'hidden'}}>sgfgfsf</span>;
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <CardFormStyles data-testid="cardNumber">
      <div className="headingCredit">Credit Card</div>
      <NavLink to="/" exact>
        <button className="back buttonBack">Back</button>
      </NavLink>
      <div className="credit-card">
        <Cards
          cvc={cvc}
          expiry={expiry}
          name={cardOwnerName}
          number={cardNumber}
          focused={focus}
        />
        <div className="containers">
        <form onSubmit={handleOnSubmit}>

          <div className="card-details">
            <div className="input-box">
              <label className="label">cardNumber</label>
              <input
                className="big-digit"
                type="number"
                name="cardNumber"
                value={cardNumber}
                placeholder="Enter cardNumber"
                onChange={handleInputChange}
                onFocus={handleFocus}
              />
            </div>
          </div>

          <div className="card-details">
            <div className="input-box"> 
           <label>{hid}Valid date{hid}</label>
            <input
              className="small-digit"
              type="tel"
              name="expiry"
              value={expiry}
              placeholder="exp"
              onChange={handleInputChange}
              onFocus={handleFocus}
            />
           </div>
          </div>

          <div className="card-details">
            <div className="input-box">
            <label>CardOwnerName</label>
            <input
              className="big-digit"
              type="text"
              name="cardOwnerName"
              value={cardOwnerName}
              placeholder="name"
              onChange={handleInputChange}
              onFocus={handleFocus}
            />
          </div>
          </div>

          <div className="card-details">
            <div className="input-box">
            <label>{hid}Security Code CVC</label>
            <input
              className="small-digit"
              type="number"
              name="cvc"
              value={cvc}
              placeholder="cvc"
              onChange={handleInputChange}
              onFocus={handleFocus}
            />
          </div>
          </div>

          
         
            <button className="buttonEdit buttonSubmit" type="submit">
              {isEdit ? 'Edit Credit Card' : 'Save Credit Card'}
            </button>
           
          
        </form>
        </div>
      </div>
    </CardFormStyles>
  );
};

export default CardForm;
