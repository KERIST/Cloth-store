import { createSelector } from 'reselect';

export const selectSectionsItems = state => state.sections.items;

export const selectSectionLoadingStatus = state => state.sections.loading;

export const selectSectionsItemsForOverview = createSelector(selectSectionsItems, (items => {
  let sectionsArray = Object.entries(items);
  let amountOfItemsInSections = 5;

  let sectionsArrayWithLimit = sectionsArray.map((section) => {
    let sectionsKey = section[0];
    let sectionsItems = section[1];
    let limitedSectionsItems = Object.entries(sectionsItems).filter((item, index) => index < amountOfItemsInSections);

    return [sectionsKey, Object.fromEntries(limitedSectionsItems)];
  })

  return sectionsArrayWithLimit;
}));


export const selectItemsBySection = (section) => {
  return createSelector(selectSectionsItems, (items) => {
    if(section in items) return items[section];
    return false;
  });
};

export const selectItemById = (section, id) => {
  return createSelector(selectSectionsItems, (items) => {
    if(section in items && id in items[section]) return items[section][id];
    return false;
  })
}