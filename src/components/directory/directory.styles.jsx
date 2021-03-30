import styled from 'styled-components';

export const DirectoryContainer = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`