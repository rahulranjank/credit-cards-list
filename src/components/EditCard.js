import React, { useContext , useState } from 'react';
import CardForm from './CardForm';
import { useParams } from 'react-router-dom';
import CardContext from '../context/CardContext';

const EditCard = ({ history }) => {
  const [isEdit ,setIsEdit] = useState(true);
  const { list,setList} = useContext(CardContext);
  const { id } = useParams();
  const cardToEdit = list.find((data) => data.id === id);

  const handleOnSubmit = (card) => {
    const filteredCards = list.filter((data) => data.id !== id);
    setList([card, ...filteredCards]);
    history.push('/');
  };

  return (
    <div>
      <CardForm card={cardToEdit} setIsEdit={setIsEdit}  isEdit={isEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditCard;
