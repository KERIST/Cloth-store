import { useState } from 'react';
import { Checkbox, Rating, Select, Input } from 'semantic-ui-react';
import styled from 'styled-components';

import FilterFormRating from '../filter-form-rating/filter-form-rating.component';

const FilterFormContaier = styled.div`
  
`;

const FilterFormGroup = styled.div`

`;

const FilterFormInput = styled(Input)`
  margin-right: 1rem;

  input {
    width: 7rem;
  }
`;

const FilterFormContent = styled.div`
  ${FilterFormRating} {
    margin: 1rem 0;
  }
`;

const FilterFormTitle = styled.div`

`;

const FilterForm = ({ sizesArray, ratingChangeHandler, sizeChangeHandler, minPriceChangeHandler }) => {
  const sortOptions = [
    { key: 'af', value: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
  ];

  // TODO: MAKE THIS FILTER WORK!

  return (<FilterFormContaier>
    <FilterFormGroup>
      <FilterFormTitle>Sort by</FilterFormTitle>
      <FilterFormContent>
        <Select placeholder='Select your country' options={sortOptions} />
      </FilterFormContent>
    </FilterFormGroup>
    <FilterFormGroup>
      <FilterFormTitle>Size</FilterFormTitle>
      <FilterFormContent>
        {sizesArray.map(value => <Checkbox key={value} label={value} onChange={sizeChangeHandler} />)}
      </FilterFormContent>
    </FilterFormGroup>
    <FilterFormGroup>
      <FilterFormTitle>Rating</FilterFormTitle>
      <FilterFormContent>
        <FilterFormRating ratingChangeHandler={ratingChangeHandler} inputValue={1} inputName="rating" ratingValue={1} ratingMax={5} />
        <FilterFormRating ratingChangeHandler={ratingChangeHandler} inputValue={2} inputName="rating" ratingValue={2} ratingMax={5} />
        <FilterFormRating ratingChangeHandler={ratingChangeHandler} inputValue={3} inputName="rating" ratingValue={3} ratingMax={5} />
        <FilterFormRating ratingChangeHandler={ratingChangeHandler} inputValue={4} inputName="rating" ratingValue={4} ratingMax={5} />
      </FilterFormContent>
    </FilterFormGroup>
    <FilterFormGroup>
      <FilterFormTitle>Prize</FilterFormTitle>
      <FilterFormContent>
        <FilterFormInput placeholder='Min.' type="number" min="0" />
        <FilterFormInput placeholder='Max.' type="number" min="0" />
      </FilterFormContent>
    </FilterFormGroup>
    </FilterFormContaier>);
}

export default FilterForm;