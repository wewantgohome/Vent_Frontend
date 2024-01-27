import React from "react";
import * as S from "./style";

const Input = ({ type, holder, onClickMethod, onChangeMethod, value }) => {
  return (
    <>
      <S.Input_Box
        type={type}
        placeholder={holder}
        onClick={onClickMethod}
        onChange={onChangeMethod}
        value={value}
      />
    </>
  );
};

export default Input;
