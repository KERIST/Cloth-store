import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

import { directoryItemsSelector } from '../../redux/directory/directory.selectors';

const Directory = ({ menuItems }) => (
    <DirectoryContainer>
        {menuItems.map(({id, ...otherProps}) => <DirectoryItem key={id} {...otherProps} />)}
    </DirectoryContainer>
)

const mapStateToProps = createStructuredSelector({
    menuItems: directoryItemsSelector
})

export default connect(mapStateToProps)(Directory);