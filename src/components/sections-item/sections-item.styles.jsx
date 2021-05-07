import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionsItemContainer = styled.section`
  
`;

export const SectionsItemTitle = styled(Link)`
  font-size: 2rem;
  padding: 1rem;
  display: block;
`;

export const SectionsItemProductsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;