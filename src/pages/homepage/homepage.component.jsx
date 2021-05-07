import { HomePageContainer, HomePageWrapper } from './homepage.styles';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <HomePageContainer>
        <HomePageWrapper>
            <Directory />
        </HomePageWrapper>
    </HomePageContainer>
)

export default HomePage;