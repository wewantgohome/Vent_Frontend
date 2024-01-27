import React from "react";
import * as S from "./style";

const EventCard = ({ title, tag, date, image }) => {
  const ColorState = tag === "진행중" ? "#5B22FF" : "#5B5E6C";
  return (
    <S.Wrapper Color={ColorState}>
      <S.ImageFrame>
        <S.tag Color={ColorState}>{tag}</S.tag>
        <img src={image} alt="" />
      </S.ImageFrame>
      <h1>{title}</h1>
      <p>{date}</p>
    </S.Wrapper>
  );
};

export default EventCard;
