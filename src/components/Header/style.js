import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Layout = styled.div`
  width: 1100px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  img {
    height: 28px;
  }
`;

export const MenuList = styled.div`
  display: flex;
  gap: 15px;
`;

export const MenuItem = styled.a`
  ${(props) =>
    props.onPage
      ? "color:#000; font-weight: 600;"
      : "color:#B3B1BA; font-weight: 500;"};
  text-decoration: none;
`;

export const Logout = styled.p`
  margin: 0;
  color: #b3b1ba;
  cursor: pointer;
`;
