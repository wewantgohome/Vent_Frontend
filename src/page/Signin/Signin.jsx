import React, { useState } from 'react';
import * as S from './style';
import Input from '../../components/Input/Input.jsx';
import Button from '../../components/Button/Button.jsx';
import API from '../../api/index.js';
import { setToken } from '../../Utils/libs/setCookies.js';
import calculateSecondExp from '../../Utils/libs/calculateSecondExp.js';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
	const history = useNavigate();
	const [businessId, setBusinessId] = useState('');
	const [accessToken, setAccessToken] = useCookies(['accessToken']);
	const [refreshToken, setRefreshToken] = useCookies(['refreshToken']);
	const [pwd, setPwd] = useState('');
	const date = new Date();
	const SubmitLogin = () => {
		API.post('business/login', {
			businessId: businessId,
			pwd: pwd,
		}).then((e) => {
			console.log(e.data.accessToken);
			setAccessToken('accessToken', e.data.accessToken, {
				path: '/',
				maxAge: 100000,
			});
			setRefreshToken('refreshToken', e.data.refreshToken, {
				path: '/',
				maxAge: 1382400,
			});
			history('/');
		});
	};
	return (
		<S.Container>
			<S.Logo_Img src='../../../Img/Logo.svg' />
			<S.Input_Box>
				<S.Input_Text>아이디</S.Input_Text>
				<Input
					type={'text'}
					holder={'아이디를 입력해주세요'}
					value={businessId}
					onChangeMethod={(e) => setBusinessId(e.target.value)}
				/>
			</S.Input_Box>

			<S.Input_Box>
				<S.Input_Text>비밀번호</S.Input_Text>
				<Input
					type={'password'}
					holder={'비밀번호를 입력해주세요'}
					onChangeMethod={(e) => setPwd(e.target.value)}
				/>
			</S.Input_Box>

			<S.Button_Box>
				<Button text={'로그인'} onClickMethod={SubmitLogin} />
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
