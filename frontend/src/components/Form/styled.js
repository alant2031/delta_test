import styled from "styled-components";

export const FieldsContainer = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	padding: 20px;
	gap: 50px;
	@media (max-width: 600px) {
		grid-template-columns: auto;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const Image = styled.div`
	img {
		height: 14vh;
	}
`;

export const TextField = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;

	input {
		border: 2px solid ${(props) => props.color};
		padding: 5px;
		outline: none;
		border-radius: 24px;
	}

	p {
		color: red;
		font-weight: bold;
		font-size: 10px;
	}
`;

export const FileField = styled.div`
	input[type="file"] {
		display: none;
	}

	label {
		border: 1px solid #ccc;
		display: inline-block;
		padding: 6px 12px;
		border-radius: 24px;
		cursor: pointer;

		:hover {
			border: 1px solid #222;
		}
	}
`;
