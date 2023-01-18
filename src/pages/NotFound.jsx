import styled from 'styled-components';
import { LinkButton } from '../components/LinkButton';

export function NotFound() {
  return (
    <Container>
      <h1>
        Error 404! Page not found.
      </h1>
      <LinkButton to="/">Back to home</LinkButton>
    </Container>
  );
}

const Container = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;