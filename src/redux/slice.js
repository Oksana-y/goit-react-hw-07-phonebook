import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const PhoneBookSlice = createSlice({
  name: 'PhoneBook',
  initialState,
  reducers: {
    filterAllContacts: (state, { payload }) => {
      state.filter = payload;
    },

    extraReducers: builder => {
      builder
        // .addCase(fetchContactsThunk.pending, (state, action) => {
        //   state.contacts.isLoading = true;
        //   state.contacts.error = '';
        // })
        // .addCase(addContactThunk.pending, (state, action) => {
        //   state.contacts.isLoading = true;
        //   state.contacts.error = '';
        // })
        // .addCase(fetchContactsThunk.rejected, (state, action) => {
        //   state.contacts.error = action.payload;
        //   state.contacts.isLoading = false;
        // })
        // .addCase(addContactThunk.rejected, (state, action) => {
        //   state.contacts.error = action.payload;
        //   state.contacts.isLoading = false;
        // })
        .addCase(fetchContactsThunk.fulfilled, (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.items = action.payload;
        })
        .addCase(addContactThunk.fulfilled, (state, action) => {
          state.contacts.isLoading = false;
          state.contacts.items.push(action.payload);
        })
        .addCase(deleteContactThunk.fulfilled, (state, action) => {
          const contactId = state.contacts.items.findIndex(
            item => item.id === action.payload
          );
          state.contacts.items.splice(contactId, 1);
        })
        .addMatcher(
          action => action.type.andsWith('pending'),
          (state, action) => {
            state.contacts.isLoading = true;
            state.contacts.error = '';
          }
        )
        .addMatcher(
          action => action.type.andsWith('rejected'),
          (state, action) => {
            state.contacts.error = action.payload;
            state.contacts.isLoading = false;
          }
        );
    },
  },
});

export const { filterAllContacts } = PhoneBookSlice.actions;
export const PhoneBookReducer = PhoneBookSlice.reducer;

// const initialState = {
//   contacts: [],
//   filter: '',
// };

// const PhoneBookSlice = createSlice({
//   name: 'PhoneBook',
//   initialState,
//   reducers: {
//     filterAllContacts: (state, { payload }) => {
//       state.filter = payload;
//     },
//     addContacts: (state, { payload }) => {
//       state.contacts.push(payload);
//     },
//     deleteContacts: (state, { payload }) => {
//       state.contacts = state.contacts.filter(
//         contacts => contacts.id !== payload
//       );
//     },
//   },
// });

// export const { filterAllContacts, addContacts, deleteContacts } =
//   PhoneBookSlice.actions;
// export const PhoneBookReducer = PhoneBookSlice.reducer;
