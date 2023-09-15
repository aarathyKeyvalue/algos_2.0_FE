import { configureStore } from '@reduxjs/toolkit';
import { batchedSubscribe } from 'redux-batched-subscribe';
import _ from 'lodash';
import { baseApi } from 'app/services/auth';

const debounceNotify = _.debounce((notify: () => void) => notify());

const middlewareList = (getDefaultMiddleware: any) => {
  const list = [baseApi.middleware];

  // eslint-disable-next-line no-empty
  if (process.env.NODE_ENV === 'development') {
  }

  return getDefaultMiddleware().concat(list);
};

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [batchedSubscribe(debounceNotify)],
  middleware: (getDefaultMiddleware: any) => middlewareList(getDefaultMiddleware)
});

export default store;
