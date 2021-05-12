import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Message } from 'semantic-ui-react';

export const SignInPageContainer = styled.section`
  max-width: 1480px;
  margin: 0 auto;
`;

export const SignInPageContent = styled.div`
  width: 32rem;
  margin: 0 auto;
  padding: 6rem 0 0;
`;

export const SignInPageText = styled.div`
  font-size: 1rem;
  padding-top: 1rem;
`;

export const SignInPageLink = styled(Link)`
  text-decoration: underline;
`;

export const SignInPageMessage = styled(Message)`
  width: 100%;
`