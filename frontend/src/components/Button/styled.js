import styled from "styled-components";
export const Button = styled.button`
	background-color: ${({ isDelete }) => (isDelete ? "#a00008" : "#0095ff")};
	border: 1px solid transparent;
	border-radius: 3px;
	box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset;
	box-sizing: border-box;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-family: -apple-system, system-ui, "Segoe UI", "Liberation Sans",
		sans-serif;
	font-size: 20px;
	font-weight: 400;
	height: 40px;
	width: fit-content;
	line-height: 1.15385;
	margin: 0;
	outline: none;
	padding: 8px 0.8em;
	position: relative;
	text-align: center;
	text-decoration: none;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	vertical-align: baseline;
	white-space: nowrap;

	:hover,
	:focus {
		background-color: ${({ isDelete }) => (isDelete ? "#cb000a" : "#07c")};
	}

	:focus {
		box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
	}

	:active {
		background-color: ${({ isDelete }) =>
			isDelete ? "#cb0044" : "#0064bd"};
		box-shadow: none;
	}
`;
