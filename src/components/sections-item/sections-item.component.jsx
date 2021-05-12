import ProductItem from '../product-item/product-item.component';
import { SectionsItemContainer, SectionsItemTitle, SectionsItemProductsContainer } from './sections-item.styles';

const SectionsOverviewItem = ({ title, items }) => {
  return <SectionsItemContainer>
    <SectionsItemTitle to={`/store/${title}`}>{`${title[0].toUpperCase()}${title.slice(1)}`}</SectionsItemTitle>
    <SectionsItemProductsContainer>
      {Object.entries(items).map(([key, itemData]) => <ProductItem key={key} id={key} sectionPath={title} itemData={itemData} />)}
    </SectionsItemProductsContainer>
  </SectionsItemContainer>
}

export default SectionsOverviewItem;