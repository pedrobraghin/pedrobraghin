import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function LinkButton({ to, children }) {
  return (
    <Container to={to}>{children}</Container>
  )
}

const Container = styled(Link)`
  width: 30vw;
  padding: 1rem 3rem;
  max-height: 3rem;
  transition: all 200ms ease-in-out;
  background-color: var(--main-color);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);
  position: relative;

  &::after {
    display: flex;
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #f4f4f4;
    transition: all 200ms ease-in-out;
  }

  &:hover {
    opacity: 0.8;
    border-radius: 0;
    box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);
    &::after {
      width: 100%;
    }
  }
`;