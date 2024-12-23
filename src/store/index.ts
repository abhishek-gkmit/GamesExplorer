import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { themeReducer } from '@store/reducers/theme';
import { userReducer } from './reducers/user';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
});

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();

export { useAppDispatch, useAppSelector };
export default store;
