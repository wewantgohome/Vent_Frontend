import React, { useEffect, useState } from "react";
import "./style"; // 여기서 style 파일을 불러오는데, 파일 이름이 누락되었습니다. 필요한 파일명으로 수정해주세요.
import {
  EventCardList,
  FilterItem,
  FilterList,
  Layout,
  TitleWrapper,
  Wrapper,
  Input,
} from "./style";
import EventCard from "../../components/EventCard";
import { FilterData } from "../../asset/data/filterData";
import Header from "../../components/Header";
import API from "../../api";
import { HomeEventListData } from "../../asset/dummy/HomeEventListData";

const Home = () => {
  const [filter, setFilter] = useState({
    name: "",
    tag: ["진행전", "진행중"],
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/user/myevent").then((e) => {
      setData(e.data);
      console.log(e.data.userEvents);
    });
    return;
  }, []);

  return (
    <Wrapper>
      <Layout>
        <Header />
        <TitleWrapper>
          <h1>내 이벤트</h1>
          <p>지금까지 출시된 이벤트 목록</p>
        </TitleWrapper>
        <Input
          type="text"
          placeholder="이름으로 검색"
          onChange={(e) => setFilter({ ...filter, name: e.target.value })}
        />
        <FilterList>
          {FilterData.map((i) => (
            <FilterItem
              key={i.id}
              value={filter.tag.includes(i.name)}
              onClick={() => {
                if (filter.tag.includes(i.name)) {
                  setFilter({
                    ...filter,
                    tag: filter.tag.filter((item) => item !== i.name),
                  });
                  return;
                }
                setFilter({ ...filter, tag: [...filter.tag, i.name] });
              }}
            >
              {i.name}
            </FilterItem>
          ))}
        </FilterList>
        <EventCardList>
          {data?.userEvents
            ?.filter(
              (i) => filter.name == "" || i.eventName.startsWith(filter.name)
            )
            .map((i, idx) => (
              <EventCard
                key={idx}
                id={i.id}
                title={i.eventName}
                startDate={i.startDate}
                endDate={i.endDate}
                image={i.image}
                tags={filter.tag}
              />
            ))}
        </EventCardList>
      </Layout>
    </Wrapper>
  );
};

export default Home;
