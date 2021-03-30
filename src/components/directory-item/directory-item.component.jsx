import { withRouter } from 'react-router-dom';
import { DirectoryItemContainer, DirectoryItemContent, DirectoryItemImageContainer, DirectoryItemText } from './directory-item.styles';

const DirectoryItem = ({size, imageUrl, title, history, match, linkUrl}) => (
    <DirectoryItemContainer size={size}>
        <DirectoryItemImageContainer src={imageUrl} alt="imagewe"/>
            <DirectoryItemContent onClick={() => {history.push(`${match.url}${linkUrl}`)}}>
                <DirectoryItemText>
                    { title }
                </DirectoryItemText>
            </DirectoryItemContent>
    </DirectoryItemContainer>
)

export default withRouter(DirectoryItem);