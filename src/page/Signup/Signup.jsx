import React, { useState } from 'react';
import * as S from './style';
import Input from '../../components/Input/Input.jsx';
import Button from '../../components/Button/Button.jsx';
import API from '../../api/index.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const history = useNavigate();
	const [businessId, setBusinessId] = useState('');
	const [pwd, setPwd] = useState('');
	const [pwdCheck, setPwdCheck] = useState('');
	const [businessName, setBusinessName] = useState('');
	const [businessNum, setBusinessNum] = useState('');
	const SubmitSignup = () => {
		API.post('/business/signup', {
			businessId: businessId,
			pwd: pwd,
			pwdCheck: pwdCheck,
			businessName: businessName,
			businessNum: businessNum,
		})
			.then((e) => {
				toast.success('회원가입에 성공했습니다');
				history('/signin');
			})
			.catch((e) => toast.error('회원가입에 실패했습니다'));
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
					value={pwd}
					onChangeMethod={(e) => setPwd(e.target.value)}
				/>
			</S.Input_Box>
			<S.Input_Box>
				<S.Input_Text>비밀번호 확인</S.Input_Text>
				<Input
					type={'password'}
					holder={'비밀번호를 한번 더 입력해주세요'}
					value={pwdCheck}
					onChangeMethod={(e) => setPwdCheck(e.target.value)}
				/>
			</S.Input_Box>
			<S.Input_Box>
				<S.Input_Text>회사명</S.Input_Text>
				<Input
					type={'text'}
					holder={'회사명(기업명)을 입력해주세요'}
					value={businessName}
					onChangeMethod={(e) => setBusinessName(e.target.value)}
				/>
			</S.Input_Box>
			<S.Input_Box>
				<S.Input_Text>사업자 등록번호</S.Input_Text>
				<Input
					type={'text'}
					holder={'사업자 등록번호를 입력해주세요'}
					value={businessNum}
					onChangeMethod={(e) => setBusinessNum(e.target.value)}
				/>
			</S.Input_Box>
			<S.Button_Box>
				<Button text={'회원가입'} onClickMethod={SubmitSignup} />
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
