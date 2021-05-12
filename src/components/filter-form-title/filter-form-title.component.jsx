import { FilterFormTitleContainer, FilterFormTitleText, FilterFormTitleBtn } from './filter-form-title.styles';

const FilterFormTitle = ({ text, btnClickHandler, isHidden }) => (
  <FilterFormTitleContainer>
    <FilterFormTitleText>{text}</FilterFormTitleText>
    <FilterFormTitleBtn hidden={isHidden} onClick={btnClickHandler}>Clear</FilterFormTitleBtn>
  </FilterFormTitleContainer>
);

export default FilterFormTitle;