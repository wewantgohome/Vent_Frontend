import React from 'react';
import * as S from './style.js';
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';
import Header from '../../components/Header/index.jsx';

const data = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
	},
];

const Envent = () => {
	return (
		<S.Container>
			<Header />

			<S.Main>
				<S.Body>
					<S.Event_Img src='../../../Img/Event.svg' />

					<S.Detail>
						<S.Detail_Title>
							아론파크 개장합니다 놀러오쇼.
						</S.Detail_Title>

						<S.Period_Body>
							<S.Period_Title>기간</S.Period_Title>
							<S.Period_Detail>
								2789.10.21 ~ 2999.10.10
							</S.Period_Detail>
						</S.Period_Body>

						<S.Organizer_Body>
							<S.Organizer_Title>주최자</S.Organizer_Title>
							<S.Organizer_Detail>이아론</S.Organizer_Detail>
						</S.Organizer_Body>

						<S.OnOffline_Body>
							<S.OnOffline_Title>
								온라인/오프라인
							</S.OnOffline_Title>
							<S.OnOffline_Detail>오프라인</S.OnOffline_Detail>
						</S.OnOffline_Body>

						<S.Divider />

						<S.Amount>
							<S.Amount_Text>결제 금액</S.Amount_Text>
							<S.Amount_Price>2,000,000</S.Amount_Price>
						</S.Amount>

						<S.Calculate>
							<S.Calculate_Day>14일 노출</S.Calculate_Day>
							<S.Calculate_Price>14X100,000</S.Calculate_Price>
						</S.Calculate>
					</S.Detail>
				</S.Body>

				<S.Desc>
					모든 국민은 보건에 관하여 국가의 보호를 받는다.
					국무총리·국무위원 또는 정부위원은 국회나 그 위원회에
					출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에
					응답할 수 있다. 모든 국민은 통신의 비밀을 침해받지 아니한다.
					선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는
					범위안에서 하되, 균등한 기회가 보장되어야 한다. 헌법재판소
					재판관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여
					연임할 수 있다. 모든 국민은 법률이 정하는 바에 의하여 국방의
					의무를 진다. 모든 국민은 신속한 재판을 받을 권리를 가진다.
					형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을
					권리를 가진다. 모든 국민은 보건에 관하여 국가의 보호를
					받는다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에
					출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에
					응답할 수 있다. 모든 국민은 통
				</S.Desc>

				<S.Divider />

				<LineChart width={500} height={300} data={data}>
					<XAxis dataKey='name' />
					<YAxis />
					<CartesianGrid stroke='#eee' strokeDasharray='5 5' />
					<Line type='monotone' dataKey='uv' stroke='#8884d8' />
					<Line type='monotone' dataKey='pv' stroke='#82ca9d' />
				</LineChart>
			</S.Main>
		</S.Container>
	);
};

export default Envent;
