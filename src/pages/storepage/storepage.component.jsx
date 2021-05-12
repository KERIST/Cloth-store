import BreadcrumbComponent from '../../components/breadcrumb/breadcrumb.component';
import SectionsOverview from '../../components/sections-overview/sections-overview.component';
import WithLoader from '../../components/withLoader/withLoader.component';
import { StorePageContainer } from './storepage.styles';

const StorePage = () => {
  return <StorePageContainer>
    <BreadcrumbComponent />
    <SectionsOverview />
  </StorePageContainer>
}

export default WithLoader(StorePage);