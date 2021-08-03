import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './configureStore';

const withRedux = PageComponet => {
  const WithRedux = ({initialReduxState, ...props}) => {
    const store = configureStore();
    return (
      <Provider store={store}>
        <PageComponet {...props} />
      </Provider>
    );
  };
  return WithRedux;
};

export default withRedux;
