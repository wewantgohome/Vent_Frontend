import React, { useState } from "react";
import * as S from "./style";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import API from "../../api/index.js";
import { setToken } from "../../Utils/libs/setCookies.js";
import calculateSecondExp from "../../Utils/libs/calculateSecondExp.js";
const Signin = () => {
  const [businessId, setBusinessId] = useState("");
  const [pwd, setPwd] = useState("");
  const date = new Date();
  const SubmitLogin = () => {
    API.post("business/login", {
      businessId: businessId,
      pwd: pwd,
    }).then((e) => {
      console.log(e.data.accessToken);
      setToken(
        e.data.accessToken,
        calculateSecondExp(date.getDate() + 1),
        e.data.refreshToken,
        calculateSecondExp(date.getDate() + 1),
        null
      );
    });
  };
  return (
    <S.Container>
      <S.Logo_Img src="../../../Img/Logo.svg" />
      <S.Input_Box>
        <S.Input_Text>아이디</S.Input_Text>
        <Input
          type={"text"}
          holder={"아이디를 입력해주세요"}
          value={businessId}
          onChangeMethod={(e) => setBusinessId(e.target.value)}
        />
      </S.Input_Box>

      <S.Input_Box>
        <S.Input_Text>비밀번호</S.Input_Text>
        <Input
          type={"password"}
          holder={"비밀번호를 입력해주세요"}
          onChangeMethod={(e) => setPwd(e.target.value)}
        />
      </S.Input_Box>

      <S.Button_Box>
        <Button text={"로그인"} onClickMethod={SubmitLogin} />
      </S.Button_Box>

      <S.Link_Box>
        <S.RegisterLink href="/signup">Vent Enterprise 회원가입</S.RegisterLink>
      </S.Link_Box>
    </S.Container>
  );
};

export default Signin;
