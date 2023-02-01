import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	background-color: #222;
	color: #ddd;
`;

export const Logo = styled.div`
	margin: 20px;
	font-weight: 900;
	font-size: larger;
	border: 1px solid turquoise;
	border-radius: 5px;
	padding: 5px;
	color: turquoise;
	background-color: transparent;
	text-transform: uppercase;
	cursor: pointer;
`;

export const Links = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 5px;
	margin-right: 20px;
	background-color: transparent;
	width: fit-content;
	gap: 60px;
`;

export const Link = styled(RouterLink)`
	color: turquoise;
	background-color: inherit;
	font-weight: bold;
	text-decoration: none;
`;
