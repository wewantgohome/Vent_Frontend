import React from 'react';
import * as S from './style';

const Input = ({ type, holder, onClickMethod, value }) => {
	return (
		<>
			<S.Input_Box type={type} placeholder={holder} onClick={onClickMethod} value={value} />
		</>
	);
};

export default Input;
