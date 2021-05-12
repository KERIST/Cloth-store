import styled from 'styled-components';

export const SectionPageContainer = styled.section`
  max-width: 1480px;
  margin: 0 auto;
`;

export const SectionPageItemsContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 250px);
  @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
  }
`;

export const SectionPageContent = styled.div`
  display: flex;
`;

