import React from "react";
import * as S from "./style";
import { MenuData } from "../../asset/data/MenuData";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const Logout = () => {};
  return (
    <S.Wrapper>
      <S.Layout>
        <S.LogoWrapper onClick={() => navigate("/")}>
          <img src="../../../Img/Logo.svg" />
        </S.LogoWrapper>
        <S.MenuList>
          {MenuData.map((i) => (
            <S.MenuItem href={i.value} onPage={location.pathname === i.value}>
              {i.name}
            </S.MenuItem>
          ))}
          <S.Logout onClick={Logout}>로그아웃</S.Logout>
        </S.MenuList>
      </S.Layout>
    </S.Wrapper>
  );
};

export default Header;
