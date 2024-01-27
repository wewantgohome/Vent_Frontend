import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router";

const EventCard = ({ title, startDate, endDate, image, id }) => {
  const dates = new Date();
  const tag = dates.getDate() - endDate > 0 ? "진행중" : "종료";
  const ColorState = tag === "진행중" ? "#5B22FF" : "#5B5E6C";
  const date = startDate.substr(0, 10) + "~" + endDate.substr(0, 10);
  const navigate = useNavigate();
  return (
    <S.Wrapper Color={ColorState} onClick={() => navigate(`/${id}`)}>
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
