import styled from 'styled-components';

export const NavContainer = styled.div`
    & > a, & > span {
        margin-right: 2.5rem;

        &::last-child {
            margin-right: 0;
        }
    }
`

export const NavButton = styled.span`
    color: #000;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
        color: #1e70bf;
        text-decoration: none;
    }
`