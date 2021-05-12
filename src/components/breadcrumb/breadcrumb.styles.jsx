import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BreadcrumbComponentContainer = styled.div`
  display: flex;
  font-size: 1.5rem;
  padding: 2rem;
  justify-content: center;
`;

export const BreadcrumbItem = styled(Link)`
  
`;

export const BreadcrumbSelectedItem = styled.div`

`;

export const BreadcrumbSeparator = styled.div`
  padding: 0 .3rem;
`;
