import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function SocialLinksFloatBar() {
  return (
    <Container>
      <a href="https://www.github.com/pedrobraghin" target="_blank"><FaGithub className="icon" /></a>
      <a href="https://www.linkedin.com/in/pedrobraghin" target="_blank"><FaLinkedin className="icon" /></a>
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  z-index: 999;
  transform: translate(0, calc(50vh - 50%));
  left: 1rem;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  a {
    text-transform: uppercase;
    transition: all 150ms ease-in-out;
    display: flex;
    width: 1.5rem;
    .icon {
      width: 100%;
      height: 100%;
    }

    &:hover {
      transform: scale(1.2);
    }
  }
`;