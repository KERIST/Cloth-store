import styled from 'styled-components';
import { Input, Button } from 'semantic-ui-react';
import FilterFormRating from '../filter-form-rating/filter-form-rating.component';

export const FilterFormContaier = styled.div`
  padding: 0 1rem;
`;

export const FilterFormGroup = styled.div`

`;

export const FilterFormInput = styled(Input)`
  margin-right: 1rem;

  input {
    width: 7rem;
  }

  &:last-child{
    margin-right: 0;
  }
`;

export const FilterFormSizesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: .5rem;
`;

export const FilterFormContent = styled.div`
  ${FilterFormRating} {
    margin: 1rem 0;
  }
`;

export const FilterFormPrice = styled.div`
  margin-bottom: 1rem;
`;

export const FilterFormTitle = styled.div`
  padding: .5rem;
`;

export const FilterFormTitleText = styled.span`
  font-weight: 700;
`;

export const FilterFormPriceBtn = styled(Button)`
  margin-left: 4.4rem !important;
  display: block;
`