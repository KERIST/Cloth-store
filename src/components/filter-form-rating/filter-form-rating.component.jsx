import { Rating } from 'semantic-ui-react';

import { FilterFormRatingContainer, FilterFormRatingInput, FilterFormRatingText } from './filter-form-rating.styles';

const FilterFormRating = ({ inputValue, inputName, ratingMax, ratingValue, ratingChangeHandler }) => (
  <FilterFormRatingContainer>
    <FilterFormRatingInput type="radio" value={inputValue} name={inputName} onChange={ratingChangeHandler} />
    <Rating defaultRating={ratingValue} maxRating={ratingMax} disabled />
    <FilterFormRatingText>& up</FilterFormRatingText>
  </FilterFormRatingContainer>
)

export default FilterFormRating;