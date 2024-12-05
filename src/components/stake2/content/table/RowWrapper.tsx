import styled from "styled-components";

interface RowWrapperProps {
  borderColor: string;
  verticalPadding: string;
}

export const RowWrapper = styled.div<RowWrapperProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${(props)=>props.verticalPadding} 0rem;
    border-top: 1px solid ${(props)=>props.borderColor};
    p {
        font-family: Inter;
        font-size: 16px;
        font-weight: 300;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
    }

    div, p {
        flex: 1;
        display: flex;
        align-items: center;
    }

    .name-box {
        gap: 0.7rem;
    }

    p:nth-child(4) {
        flex: 2.2;
    }

    p:nth-child(5) {
        flex: 2;
    }
`;
