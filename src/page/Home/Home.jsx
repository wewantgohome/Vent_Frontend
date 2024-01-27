import React, { useState } from "react";
import "./style";
import {
  EventCardList,
  FilterItem,
  FilterList,
  Layout,
  TitleWrapper,
  Wrapper,
  Input,
} from "./style";
import { HomeEventListData } from "../../asset/dummy/HomeEventListData";
import EventCard from "../../components/EventCard";
import { FilterData } from "../../asset/data/filterData";
import Header from "../../components/Header";
const Home = () => {
  const [filter, setFilter] = useState({
    name: "",
    tag: ["진행중", "종료"],
  });

  return (
    <Wrapper>
      <Layout>
        <Header />
        <TitleWrapper>
          <h1>내 이벤트</h1>
          <p>지금까지 출시된 이벤트 목록</p>
        </TitleWrapper>
        <Input type="text" placeholder="이름으로 검색" />
        <FilterList>
          {FilterData.map((i) => (
            <FilterItem onClick={() => setFilter()}>{i.name}</FilterItem>
          ))}
        </FilterList>
        <EventCardList>
          {HomeEventListData.map((i) => (
            <EventCard
              title={i.title}
              tag={i.tag}
              date={i.date}
              image={i.image}
            />
          ))}
        </EventCardList>
      </Layout>
    </Wrapper>
  );
};

export default Home;
