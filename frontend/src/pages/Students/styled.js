import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;

export const Main = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: space-around;
`;

export const Title = styled.h1`
	font-size: 40px;
	font-weight: bold;
	color: #222;
`;

export const Button = styled.div`
	display: flex;
	align-items: center;
	padding: 0 10px;
	background-color: #222;
	border-radius: 20px;
	color: white;
	cursor: pointer;
	font-size: larger;

	:hover {
		color: green;
	}
`;

export const Cards = styled.div`
	display: grid;
	grid-template-columns: auto auto auto auto auto auto;
	/* border: 1px solid blue; */
	margin: 0 10px;
	gap: 15px;

	@media (max-width: 800px) {
		grid-template-columns: auto auto auto;
	}

	@media (max-width: 600px) {
		grid-template-columns: auto auto;
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid black;
	border-radius: 25px;
	cursor: pointer;

	:hover {
		font-weight: bolder;
	}
`;

export const Br = styled.hr`
	height: 1vh;
	background-color: #123;
`;
