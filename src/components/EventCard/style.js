import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  width: 16vw;
  height: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  h1 {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: -0.18px;
  }
  p {
    color: ${(props) => props.Color};
  }
`;

export const ImageFrame = styled.div`
  height: 70%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: end;
  background-color: #d9d9d9;
  img {
  }
`;

export const tag = styled.div`
  position: absolute;
  width: fit-content;
  padding: 2.5px 12px;
  margin: 13px 15px;
  border-radius: 30px;
  background-color: #f4f0ff;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.16px;
  color: ${(props) => props.Color};
`;
