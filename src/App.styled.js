import styled from "styled-components";

export const HeaderStyles = styled.header`
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
    min-width: 750px;
    margin: 30px auto;

    h2 {
        margin-bottom: 0;
    }

    p {
        margin: 5px auto;
    }
`

export const TableStyles = styled.table`
    margin: 30px auto;
    min-width: 750px;
    padding: 30px 15px;
    font-family: 'Noto Sans KR', sans-serif;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgb(0 0 0 / 30%);
`
export const TableRow = styled.tr`
    display: grid;
    grid-template-columns: 8% 25% 10% auto;
    margin-bottom: 5px;

    td {
        text-align: center !important;
    }
`

