import { Rating } from 'semantic-ui-react';
import styled from 'styled-components';

const FilterFormRatingContainer = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;

  i {
    cursor: pointer !important;
  }
`;

const FilterFormRatingText = styled.div`

`;

const FilterFormRatingInput = styled.input`
  display: none;

  &:checked ~ ${FilterFormRatingText} {
    font-weight: 700;
  }
`;

const FilterFormRating = ({ inputValue, inputName, ratingMax, ratingValue, ratingChangeHandler }) => (
  <FilterFormRatingContainer>
    <FilterFormRatingInput type="radio" value={inputValue} name={inputName} onChange={ratingChangeHandler} />
    <Rating defaultRating={ratingValue} maxRating={ratingMax} disabled />
    <FilterFormRatingText>& up</FilterFormRatingText>
  </FilterFormRatingContainer>
)

export default FilterFormRating;