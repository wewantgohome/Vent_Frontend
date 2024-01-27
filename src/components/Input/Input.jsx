import React from 'react';
import * as S from './style';

const Input = ({ type, holder, onClickMethod }) => {
	return (
		<>
			<S.Input_Box type={type} placeholder={holder} onClick={onClickMethod} />
		</>
	);
};

export default Input;
