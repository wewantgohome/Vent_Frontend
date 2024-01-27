import React, { useState } from "react";
import * as S from "./style";

import Header from "../../components/Header/";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";

const CreateEvent = () => {
  const today = new Date();
  const [title, setTitle] = useState();
  const [explanation, setExplanation] = useState();
  const [link, setLink] = useState();
  const [place, setPlace] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [file, setFile] = useState();
  const [payment, setPayment] = useState("CreditCard");

  const onChangeFile = () => {};

  return (
    <S.Container>
      <Header />
      <S.Main_Text>
        <h1>이벤트 등록하기</h1>
        <h5>이벤트를 vent에 등록해보세요</h5>
      </S.Main_Text>
      <S.Body>
        <S.Left>
          <S.Input_Text>이벤트 이름</S.Input_Text>
          <S.Input_Box>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              holder="이벤트 이름을 입력해주세요"
            />
          </S.Input_Box>
          <S.Input_Text>이벤트 설명</S.Input_Text>
          <S.Input_Box>
            <S.Event_Input
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="이벤트 설명(500자)"
            />
          </S.Input_Box>
          <S.Input_Text>이벤트 관련링크</S.Input_Text>
          <S.Input_Box>
            <Input
              type="link"
              value={link}
              onChange={(e) => e.target.value}
              holder="링크 입력"
            />
          </S.Input_Box>
          <S.Input_Text>이벤트 장소</S.Input_Text>
          <S.Input_Box>
            <Input
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              holder="주소 입력"
            />
          </S.Input_Box>
          <S.Input_Text>기간 설정</S.Input_Text>
          <S.Time_Input_Box>
            <S.Time_Input>
              <p>시작 날짜</p>
              <S.Year_Input_Box>
                <Input type="text" value={today.getFullYear()} />
              </S.Year_Input_Box>
              <p>년</p>
              <S.Month_Input_Box>
                <Input type="text" value={today.getMonth() + 1} />
              </S.Month_Input_Box>
              <p>월</p>
              <S.Day_Input_Box>
                <Input type="text" value={today.getDate()} />
              </S.Day_Input_Box>
              <p>일</p>
            </S.Time_Input>
          </S.Time_Input_Box>
          <S.Time_Input_Box>
            <S.Time_Input>
              <p>종료 날짜</p>
              <S.Year_Input_Box>
                <Input type="text" />
              </S.Year_Input_Box>
              <p>년</p>
              <S.Month_Input_Box>
                <Input type="text" />
              </S.Month_Input_Box>
              <p>월</p>
              <S.Day_Input_Box>
                <Input type="text" />
              </S.Day_Input_Box>
              <p>일</p>
            </S.Time_Input>
          </S.Time_Input_Box>
        </S.Left>
        <S.Right>
          <S.Input_Text>이벤트 사진</S.Input_Text>
          <S.Img_Input_Label htmlFor="Img_Input">
            <S.EmptyImg src="../../Img/EmptyImg.svg" />
            <S.EmptyImg_Text>이미지 사진 등록</S.EmptyImg_Text>
          </S.Img_Input_Label>
          <S.Img_Input type={"file"} id="Img_Input" hidden />
          <S.Amount>
            <S.Amount_Text>결제 금액</S.Amount_Text>
            <S.Amount_Price>2,000,000</S.Amount_Price>
          </S.Amount>
          <S.Calculate>
            <S.Calculate_Day>14일 노출</S.Calculate_Day>
            <S.Calculate_Price>14X100,000</S.Calculate_Price>
          </S.Calculate>
          <S.Payment>
            <S.Payment_Text>결제 수단</S.Payment_Text>
            <S.Payment_Input_Box>
              <S.Payment_Label>
                <input
                  type="radio"
                  name="Payment"
                  defaultValue="CreditCard"
                  checked={payment === "CreditCard"}
                  onClick={() => setPayment("CreditCard")}
                />
                <span>신용카드</span>
              </S.Payment_Label>
              <S.Payment_Label>
                <input
                  type="radio"
                  name="Payment"
                  defaultValue="AccountTransfer"
                  checked={payment === "AccountTransfer"}
                  onClick={() => setPayment("AccountTransfer")}
                />
                <span>실시간 계좌이체</span>
              </S.Payment_Label>
              <S.Payment_Label>
                <input
                  type="radio"
                  name="Payment"
                  defaultValue="Deposit"
                  checked={payment === "Deposit"}
                  onClick={() => setPayment("Deposit")}
                />
                <span>무통장입금</span>
              </S.Payment_Label>
            </S.Payment_Input_Box>
          </S.Payment>
        </S.Right>
      </S.Body>
      <Button text="결제하기" />
    </S.Container>
  );
};

export default CreateEvent;
