import React from "react";
import * as S from "./style";

const Button = ({ text, onClickMethod }) => {
  return (
    <>
      <S.Button_Box onClick={onClickMethod}>{text}</S.Button_Box>
    </>
  );
};

export default Button;
