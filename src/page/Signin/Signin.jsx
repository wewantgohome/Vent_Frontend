import React from 'react';
import * as S from './style';

import Input from '../../components/Input/Input.jsx';
import Button from '../../components/Button/Button.jsx';

const Signin = () => {
	return (
		<S.Container>
			<S.Logo_Img src='../../../Img/Logo.svg' />
			<S.Input_Box>
				<S.Input_Text>아이디</S.Input_Text>
				<Input
					type={'text'}
					holder={'아이디를 입력해주세요'}
					onClickMethod={() => {}}
				/>
			</S.Input_Box>

			<S.Input_Box>
				<S.Input_Text>비밀번호</S.Input_Text>
				<Input
					type={'text'}
					holder={'비밀번호를 입력해주세요'}
					onClickMethod={() => {}}
				/>
			</S.Input_Box>

			<S.Button_Box>
				<Button text={'로그인'} onClickMethod={() => {}} />
			</S.Button_Box>

			<S.Link_Box>
				<S.RegisterLink href='/signup'>
					Vent Enterprise 회원가입
				</S.RegisterLink>
			</S.Link_Box>
		</S.Container>
	);
};

export default Signin;
