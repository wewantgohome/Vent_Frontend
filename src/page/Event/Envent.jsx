import React, { useEffect, useState } from "react";
import * as S from "./style.js";
import { BarChart, XAxis, YAxis, Bar } from "recharts";
import Header from "../../components/Header/index.jsx";
import API from "../../api/index.js";
import { useParams } from "react-router";

const Envent = () => {
  const params = useParams();
  const [eventData, setEventData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const changeDate = (date) => {
    return date.substr(0, 10).replace(/-/g, ".");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get(`event/${params.id}`);
        setEventData(res.data.data.dataValues);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [params.id]);
  if (isLoading) return;
  return (
    <S.Container>
      <Header />
      <S.Main>
        <S.Body>
          {eventData?.eventImg ? (
            <S.Event_Img src={eventData?.eventImg} />
          ) : (
            <S.EventImageFrame />
          )}
          <S.Detail>
            <S.Detail_Title>{eventData?.eventName}</S.Detail_Title>

            <S.Period_Body>
              <S.Period_Title>기간</S.Period_Title>
              <S.Period_Detail>
                {changeDate(eventData?.startDate) +
                  " ~ " +
                  changeDate(eventData?.endDate)}
              </S.Period_Detail>
            </S.Period_Body>

            <S.Organizer_Body>
              <S.Organizer_Title>주최자</S.Organizer_Title>
              <S.Organizer_Detail>이아론</S.Organizer_Detail>
            </S.Organizer_Body>
            <S.OnOffline_Body>
              <S.OnOffline_Title>온라인/오프라인</S.OnOffline_Title>
              <S.OnOffline_Detail>
                {eventData?.place ? "오프라인" : "온라인"}
              </S.OnOffline_Detail>
            </S.OnOffline_Body>
            <S.Organizer_Body>
              <S.Organizer_Title>장소</S.Organizer_Title>
              <S.Organizer_Detail>{eventData?.place}</S.Organizer_Detail>
            </S.Organizer_Body>
            <S.Divider />
            <S.Amount>
              <S.Amount_Text>결제 금액</S.Amount_Text>
              <S.Amount_Price>{eventData?.price}원</S.Amount_Price>
            </S.Amount>

            <S.Calculate>
              <S.Calculate_Day></S.Calculate_Day>
              <S.Calculate_Price>14X100,000</S.Calculate_Price>
            </S.Calculate>
          </S.Detail>
        </S.Body>

        <S.Desc>{eventData?.description}</S.Desc>

        <S.Divider />

        <BarChart
          width={600}
          height={300}
          data={[{ name: "조회수", uv: eventData.views }]}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" barSize={50} fill="#5B22FF" />
        </BarChart>
      </S.Main>
    </S.Container>
  );
};

export default Envent;
