import styled from "styled-components";


const PaginationList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    list-style-type: none;
`
const PageItem = styled.li`
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ active }) => active ? "#fff" : '#000'};
    padding: 4px;
    list-style-type: none;
    width: 28px;
    height: 28px;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: ${({ active }) => active ? "#5138dc" : '#fff'};
    &:not(:last-child) {
        margin-right: 10px;
    }
    &:hover {
        color: ${({ active }) => active ? "#fff" : '#000'};
        background-color: ${({ active }) => active ? "#5138dc" : '#e1e1e1'};
    }

`
export { PaginationList, PageItem }