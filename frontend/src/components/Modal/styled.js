import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 255, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.div`
	width: 500px;
	background-color: blue;
`;

export const Header = styled.div`
	padding: 10px;
`;

export const Footer = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 10px;
`;

export const Title = styled.h4`
	margin: 0;
`;

export const Body = styled.div`
	padding: 10px;
	border-top: 1px solid #eee;
	border-bottom: 1px solid #eee;
`;
