import { RootState } from './store';
import {IContact} from 'components/types'

export const selectFilter = (state: RootState) => state.filter;

export const selectContacts = (state: RootState) => state.contacts.items;

export const selectIsLoading = (state: RootState) => state.contacts.isLoading;

export const selectIsCheckingLogin = (state: RootState) => state.auth.isCheckingLogin;

export const selectUserName = (state: RootState) => state.auth.user.name;

export const selectUserEmail = (state: RootState) => state.auth.user.email;

export const selectIsLoogedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectFilteredContacts = (state: RootState) => {
  const contacts: IContact[] | never[] = selectContacts(state);
  const filter: string = selectFilter(state);

  return contacts
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];
};
