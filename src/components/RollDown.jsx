import styled from 'styled-components';

export function RollDown() {
  return (
    <Container>
      <span>&gt;</span>
    </Container>
  );
}

const Container = styled.div`
  width: 1rem;
  height: 1rem
  display: flex;
  transform: rotate(90deg);

  span {
    display: flex;
    font-size: 2rem;
    font-weight: lighter;
    animation-name: rollDown;
    animation-duration: 3s;
    animation-delay: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes rollDown {
    0% {
      opacity: 0;
      transform: translate(0, 0);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(40px, 0);
    }
  }
`;