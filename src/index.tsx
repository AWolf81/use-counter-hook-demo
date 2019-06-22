import React from 'react';
import { render } from 'react-dom';
import useCounter from './hooks/useCounter';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import theme from './theme';

const App = () => {
  const onReset = () => alert('Counter about to reset');
  const onAfterReset = () => alert('Counter reset!');
  const [value, { inc, dec, get, set, reset }] = useCounter({
    initialCount: 10,
    onReset,
    onAfterReset,
  });

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Heading color="black">
            Counter demo
            <span>with React &amp; Typescript</span>
          </Heading>
          <CounterDisplay>{value}</CounterDisplay>
          <div>
            <button onClick={() => inc()}>inc</button>
            <button onClick={() => dec()}>dec</button>
            <button onClick={() => inc(5)}>inc 5</button>
            <button onClick={() => dec(5)}>dec 5</button>
            <button onClick={() => set(100)}>set 100</button>
            <button onClick={() => alert(get())}>get count</button>
            <button onClick={() => reset()}>reset</button>
            <button onClick={() => reset(20)}>reset to 20</button>
          </div>

          <h2>Used parts / libraries</h2>
          <ul>
            {[
              'styled-components',
              'styled-normalize',
              'React',
              'React hooks',
              'Typescript',
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 15px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8);
`;

const Heading = styled.h1`
  margin: 0;
  span {
    font-size: 0.7em;
    padding-left: 0.3em;
    color: gray;
    :before {
      content: ' ';
      display: block;
    }
  }
`;

const CounterDisplay = styled.div`
  display: block;
  width: 50px;
  margin: 20px auto;
  text-align: center;
  padding: 15px;
  border: 1px solid black;
  font-size: 1.5em;
  font-weight: bold;
`;
const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  body {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

render(<App />, document.getElementById('root'));
