import { configureStore } from '@reduxjs/toolkit';
import { batchedSubscribe } from 'redux-batched-subscribe';
import _ from 'lodash';

const debounceNotify = _.debounce((notify: () => void) => notify());

const store = configureStore({
  reducer: {
  },
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [batchedSubscribe(debounceNotify)]
});

export default store;
