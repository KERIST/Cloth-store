import BreadcrumbComponent from '../../components/breadcrumb/breadcrumb.component';
import SectionsOverview from '../../components/sections-overview/sections-overview.component';
import styled from 'styled-components';

const StorePageContainer = styled.section`
  max-width: 1480px;
  margin: 0 auto;
`

const StorePage = () => {
  return <StorePageContainer>
    <BreadcrumbComponent />
    <SectionsOverview />
  </StorePageContainer>
}

export default StorePage;