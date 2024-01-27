import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

export const Layout = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: var(--Grayscale-600, #2f323e);

    /* H1 */
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 150% */
    letter-spacing: -0.24px;
  }
  p {
    color: var(--Grayscale-400, #5b5e6c);
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
    letter-spacing: -0.16px;
  }
`;

export const Input = styled.input`
  height: 50px;
  width: 360px;
  padding: 0 20px 0 20px;
  border-radius: 10px;
  border: 1px solid var(--Grayscale-200, #d7d9de);
  background: var(--Grayscale-50, #fff);
`;

export const FilterList = styled.div`
  display: flex;
  gap: 10px;
`;

export const FilterItem = styled.div`
  padding: 10px 22px;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
  border-radius: 20px;
`;

export const EventCardList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  gap: 20px 30px;
`;
