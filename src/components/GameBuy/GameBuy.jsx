import React from "react";

import { Button } from '../../components';


const GameBuy = () => {
  
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <Button
        type={"primary"}
        onClick={handleClick}
        
      >
        B Корзину
      </Button>
    </>
  );
};

export default GameBuy;