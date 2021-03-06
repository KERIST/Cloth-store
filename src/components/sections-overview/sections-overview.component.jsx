import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSectionsItemsForOverview } from '../../redux/sections/sections.selectors';
import SectionsItem from '../sections-item/sections-item.component';
import { SectionsOverviewContainer } from './sections-overview.styles';

const SectionsOverview = ({ overviewItems }) => {
    return (<SectionsOverviewContainer>
        {overviewItems.map(([key, items]) => <SectionsItem key={key} title={key} items={items}/>)}
    </SectionsOverviewContainer>);
}

const mapStateToProps = createStructuredSelector({
    overviewItems: selectSectionsItemsForOverview
})

export default connect(mapStateToProps)(SectionsOverview);