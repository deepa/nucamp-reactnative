import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import React from 'react';
import Main from './components/MainComponent';

const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
