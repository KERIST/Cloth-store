import styled from 'styled-components';

export const FilterFormRatingContainer = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;

  i {
    cursor: pointer !important;
  }
`;

export const FilterFormRatingText = styled.div`

`;

export const FilterFormRatingInput = styled.input`
  display: none;

  &:checked ~ ${FilterFormRatingText} {
    font-weight: 700;
  }
`;