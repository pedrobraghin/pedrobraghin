import styled from 'styled-components';
import { SocialLinksFloatBar } from '../components/SocialLinksFloatBar';
import { RollDownTripple } from '../components/RollDownTripple';

export function Home() {
  return (
    <Container>
      <SocialLinksFloatBar />
      <Content>
        <Presentation>
          <div>Welcome to my portfolio!</div>
          <div className="text-content-wrapper">
            <h1>
              Hello! I'm Pedro Braghin
              <span className="blink"></span>
            </h1>
            <span className="subtitle">Full-Stack developer</span>
          </div>
          <div className="scroll-down-box">
            <span>Scroll down and check my abilities and knowledge.</span>
          <RollDownTripple />
          </div>
        </Presentation>
        <section>
          <h1>About me</h1>
        </section>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Content = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  section {
    padding: 2rem 1rem;
  }
`;

const Presentation = styled.section`
  width: 100%;
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #000;

  .text-content-wrapper {
    text-align: center;

    h1 {
      font-family: monospace;
      animation: typing 3s steps(46, end), blink .8s step-end infinite alternate;
      position: relative;
      display: flex;
      justify-content: left;
      align-items: center;
      gap: 0.4rem;
      height: 80%;
      border-right: 3px solid;
      overflow: hidden;
      white-space: nowrap;
      margin: 0 auto;
    }

    .subtitle {
      opacity: 0.8;
    }

    @keyframes typing {
      from { 
        width: 0 
      }
      to { 
        width: 100% 
      }
    }

    @keyframes blink {
      50% {
        border-color: transparent
      }
    }
  }

  .scroll-down-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
    transition: opacity 200ms linear;

    &:hover {
      opacity: 1;
    }
  }
`;