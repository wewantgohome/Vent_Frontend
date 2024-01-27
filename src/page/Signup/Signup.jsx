import React from 'react';
import * as S from './style';

import Input from '../../components/Input/Input.jsx';
import Button from '../../components/Button/Button.jsx';

const Signup = () => {
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
					type={'password'}
					holder={'비밀번호를 입력해주세요'}
					onClickMethod={() => {}}
				/>
			</S.Input_Box>

			<S.Input_Box>
				<S.Input_Text>비밀번호 확인</S.Input_Text>
				<Input
					type={'password'}
					holder={'비밀번호를 한번 더 입력해주세요'}
					onClickMethod={() => {}}
				/>
			</S.Input_Box>

      <S.Input_Box>
				<S.Input_Text>회사명</S.Input_Text>
				<Input
					type={'text'}
					holder={'회사명(기업명)을 입력해주세요'}
					onClickMethod={() => {}}
				/>
			</S.Input_Box>

      <S.Input_Box>
				<S.Input_Text>사업자 등록번호</S.Input_Text>
				<Input
					type={'text'}
					holder={'사업자 등록번호를 입력해주세요'}
					onClickMethod={() => {}}
				/>
			</S.Input_Box>

			<S.Button_Box>
				<Button text={'회원가입'} onClickMethod={() => {}} />
			</S.Button_Box>

			<S.Link_Box>
				<S.RegisterLink href='/signin'>
					Vent Enterprise 로그인
				</S.RegisterLink>
			</S.Link_Box>
		</S.Container>
	);
};

export default Signup;
