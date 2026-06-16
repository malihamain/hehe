import { Button } from "@material-ui/core";
import Add from '../assets/Add.svg';
import Minus from '../assets/Minus.svg';

const AddButton = ({ setShowAddItem,showAddItem }) => {
  const show= () => {
    setShowAddItem(!showAddItem);
  };

  return ( 
    <Button >
      <img onClick={show} src={showAddItem ? Minus : Add} alt={Add}/>
    </Button>
  );
};


export default AddButton;
