import React from 'react';
import * as S from './style';
import { MenuData } from '../../asset/data/MenuData';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Header = () => {
	const location = useLocation();
	const navigate = useNavigate();
  const [, , removeCookie] = useCookies(["accessToken"]);
	const Logout = () => {
		removeCookie("accessToken", { path: '/' });
    navigate('/signin')
	};
	return (
		<S.Wrapper>
			<S.Layout>
				<S.LogoWrapper onClick={() => navigate('/')}>
					<img src='../../../Img/Logo.svg' />
				</S.LogoWrapper>
				<S.MenuList>
					{MenuData.map((i) => (
						<S.MenuItem
							key={i.value}
							href={i.value}
							onPage={location.pathname === i.value}
						>
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
