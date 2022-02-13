import React, { useContext } from 'react';
import CardForm from './CardForm';
import CardContext from '../context/CardContext';

const AddCard = ({ history }) => {
  const { list, setList } = useContext(CardContext);

  const handleOnSubmit = (card) => {
    setList([card, ...list]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <CardForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCard;
