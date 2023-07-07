import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'components/globalStyled';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
            <GlobalStyle />
    <Provider store={store}>
        <BrowserRouter basename='/Phonebook'>
        <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
