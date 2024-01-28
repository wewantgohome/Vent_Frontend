import React, { useState } from "react";
import * as S from "./style";
import API from "../../api/index.js";
import Header from "../../components/Header/";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";

const CreateEvent = () => {
  const today = new Date();
  const [title, setTitle] = useState();
  const [explanation, setExplanation] = useState();
  const [link, setLink] = useState();
  const [place, setPlace] = useState();
  const [startDate, setStartDate] = useState({
    year: today.getFullYear(),
    Month: today.getMonth() + 1,
    day: today.getDate(),
  });
  const [endDate, setEndDate] = useState({
    year: today.getFullYear(),
    Month: today.getMonth() + 1,
    day: today.getDate(),
  });
  const [file, setFile] = useState(undefined);
  const [payment, setPayment] = useState("CreditCard");
  const [price, setPrice] = useState(0);
  const handleChange = (e) => {
    const selectedFile = e.currentTarget.files?.item(0);
    if (selectedFile !== null) setFile(selectedFile);
  };

  const postEvent = () => {
    console.log("333");
    const formData = new FormData();

    if (file) {
      const imageFile = new File([file], "noticeImage.png", {
        type: "image/png",
      });
      formData.append("img", imageFile);
    }
    formData.append("eventName", title);
    formData.append("description", explanation);
    formData.append("link", link);
    formData.append(
      "startDate",
      startDate.year +
        "-" +
        String(startDate.Month).padStart(2, "0") +
        "-" +
        String(startDate.day).padStart(2, "0")
    );
    formData.append(
      "endDate",
      endDate.year +
        "-" +
        String(endDate.Month).padStart(2, "0") +
        "-" +
        String(endDate.day).padStart(2, "0")
    );
    formData.append("price", price);
    formData.append("place", place);

    API.post("/event/create", formData, {
      "Content-Type": "multipart/form-data",
    });
  };

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
              onChange={(e) => setLink(e.target.value)}
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
                <Input
                  type="number"
                  value={startDate.year}
                  onChangeMethod={(e) =>
                    setStartDate({ ...startDate, year: e.target.value })
                  }
                />
              </S.Year_Input_Box>
              <p>년</p>
              <S.Month_Input_Box>
                <Input
                  type="number"
                  value={startDate.Month}
                  onChangeMethod={(e) =>
                    setStartDate({ ...startDate, Month: e.target.value })
                  }
                />
              </S.Month_Input_Box>
              <p>월</p>
              <S.Day_Input_Box>
                <Input
                  type="number"
                  value={startDate.day}
                  onChangeMethod={(e) =>
                    setStartDate({ ...startDate, day: e.target.value })
                  }
                />
              </S.Day_Input_Box>
              <p>일</p>
            </S.Time_Input>
          </S.Time_Input_Box>
          <S.Time_Input_Box>
            <S.Time_Input>
              <p>종료 날짜</p>
              <S.Year_Input_Box>
                <Input
                  type="number"
                  value={endDate.year}
                  onChangeMethod={(e) =>
                    setEndDate({ ...endDate, year: e.target.value })
                  }
                />
              </S.Year_Input_Box>
              <p>년</p>
              <S.Month_Input_Box>
                <Input
                  type="number"
                  value={endDate.Month}
                  onChangeMethod={(e) =>
                    setEndDate({ ...endDate, Month: e.target.value })
                  }
                />
              </S.Month_Input_Box>
              <p>월</p>
              <S.Day_Input_Box>
                <Input
                  type="number"
                  value={endDate.day}
                  onChangeMethod={(e) =>
                    setEndDate({ ...endDate, day: e.target.value })
                  }
                />
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
          <S.Img_Input
            type="file"
            id="Img_Input"
            onChange={handleChange}
            hidden
          />
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
                  defaultChecked={payment === "CreditCard"}
                  onClick={() => setPayment("CreditCard")}
                />
                <span>신용카드</span>
              </S.Payment_Label>
              <S.Payment_Label>
                <input
                  type="radio"
                  name="Payment"
                  defaultValue="AccountTransfer"
                  defaultChecked={payment === "AccountTransfer"}
                  onClick={() => setPayment("AccountTransfer")}
                />
                <span>실시간 계좌이체</span>
              </S.Payment_Label>
              <S.Payment_Label>
                <input
                  type="radio"
                  name="Payment"
                  defaultValue="Deposit"
                  defaultChecked={payment === "Deposit"}
                  onClick={() => setPayment("Deposit")}
                />
                <span>무통장입금</span>
              </S.Payment_Label>
            </S.Payment_Input_Box>
          </S.Payment>
        </S.Right>
      </S.Body>
      <Button onClickMethod={postEvent} text="결제하기" />
    </S.Container>
  );
};

export default CreateEvent;
