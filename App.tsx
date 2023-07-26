import * as React from 'react';
import MainPage from './src/MainPage';

export interface AppProps {
  name: string;
}

const App: React.FC<AppProps> = ({name}) => {
  name = 'Mr Robot';
  return (
    <>
      <MainPage name={name} />
    </>
  );
};

export default App;
