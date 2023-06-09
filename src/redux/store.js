import { configureStore } from '@reduxjs/toolkit';
import { PhoneBookReducer } from './slice';


export const store = configureStore({
  reducer: PhoneBookReducer
});





// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   persistStore,
//   persistReducer,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { configureStore } from '@reduxjs/toolkit';
// import { PhoneBookReducer } from './slice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };
// const persistedReducer = persistReducer(persistConfig, PhoneBookReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);
