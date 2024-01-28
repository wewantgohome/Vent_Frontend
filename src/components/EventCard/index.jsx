import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router";

const EventCard = ({ title, startDate, endDate, image, id, tags }) => {
  const toDate = Date.now();
  const endDates = new Date(endDate);
  const startDates = new Date(startDate);
  const endDateTime = endDates.getTime();
  const startDateTime = startDates.getTime();

  let tag = "";

  if (startDateTime >= toDate) {
    tag = "진행전";
    if (toDate > endDateTime) {
      tag = "종료";
    }
  } else {
    tag = "진행중";
  }

  const visible = tags.includes(tag);
  const ColorState = tag === "진행중" ? "#5B22FF" : "#5B5E6C";
  console.log(visible);

  const date = startDate.substr(0, 10) + " ~ " + endDate.substr(0, 10);
  const navigate = useNavigate();
  console.log(typeof image);
  if (!visible) {
    return;
  }
  return (
    <S.Wrapper
      Color={ColorState}
      Hidden={visible}
      onClick={() => navigate(`/${id}`)}
    >
      <S.ImageFrame>
        <S.tag Color={ColorState}>{tag}</S.tag>
        <img src="src/asset/ex_1.png" alt="" />
      </S.ImageFrame>
      <h1>{title}</h1>
      <p>{date}</p>
    </S.Wrapper>
  );
};

export default EventCard;
