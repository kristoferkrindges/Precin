import styled from "styled-components";
import { v } from "../../styles/variables";
export const DLayout = styled.div`
	display: flex;

	& main {
		margin-left: 32%;

		@media (max-width: 768px) {
			margin-left: 5%;
		}
	}
`;

export const SMain = styled.main`
	/* padding: calc(${v.smSpacing} * 2); */
	/* display: flex;
    margin: 0;
    justify-content: space-between; */

	/* h1 {
        font-size: 14px;
    } */
`;
