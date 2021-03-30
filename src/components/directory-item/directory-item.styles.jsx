import styled, { css } from 'styled-components';

export const DirectoryItemContainer = styled.div`
    overflow: hidden;
    position: relative;
    height: 300px;
    ${props => props.size === 'large' ? css`
        /* width: 100%; */
        grid-column: 1/4;
        @media screen and (max-width: 800px) {
            grid-column: 1/1;
        }
    ` : props.size === 'medium' ? css`
        /* width: 48%; */
    ` : css`
        /* width: 32%; */
    `}
    
`
export const DirectoryItemContent = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
    transition: opacity 0.5s;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 800px) {
        opacity: 1;
    }
`;

export const DirectoryItemText = styled.p`
    font-size: 3rem;
    color: white;
    text-transform: uppercase;
`

export const DirectoryItemImageContainer = styled.div`
    width: 100%;
    height: 100%;
    ${props => props.src && css`
        background: url(${props.src}) center center;
    `}
    background-size: cover;
`;