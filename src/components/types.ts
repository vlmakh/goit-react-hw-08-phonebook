import { ReactNode } from 'react';

export interface IValues {
  name: string;
  number: string;
}

export interface ICredentials {
  name?: string,
  email: string;
  password: string;
}

export interface IContact extends IValues {
  id: string;
}

export interface IContactList {
  contacts: Array<IContact>;
}

export interface IContactListItem extends IContact, IContactList {}

export interface IResetForm {
  resetForm: () => void;
}

export interface INotification {
  msg: string;
}

export interface IToggleModal {
  toggleModalForm: () => void;
}

export interface IModal {
  children: ReactNode;
  onClose: () => void;
}

export interface IEditForm {
  onFormSubmit: (values: IValues) => void;
  nameToUpdate: string;
  numberToUpdate: string;
}

export interface IContactsState {
  items: IContact[];
  isLoading: string | null;
}

export interface IAuthState {
  user:
  {
    name: string | null,
    email: string | null,
  },
  token: string | null,
  isLoggedIn: boolean,
  isCheckingLogin: boolean,
};

export interface IConfirm {
  onFormSubmit: ()=> void,
  toggleConfirm: () => void,
  name: string,
}
