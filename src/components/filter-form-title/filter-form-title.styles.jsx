import styled from 'styled-components';

export const FilterFormTitleContainer = styled.div`
  padding: .5rem 0;
  display: flex;
  justify-content: space-between;
`;

export const FilterFormTitleText = styled.span`
  font-weight: 700;
`;

export const FilterFormTitleBtn = styled.span`
  font-size: 0.9rem;
  cursor: pointer;
  color: #757575;
  text-decoration: underline;
  &:hover {
    color: #000;
  }
`