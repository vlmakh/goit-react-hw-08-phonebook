import { ReactNode } from 'react';

export interface IValues {
  name: string;
  number: string;
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

export interface IDelete {
  deleteContact: (x: string) => void;
}

export interface IToggleModal {
  toggleModalForm: () => void;
}

export interface IModal {
  children: ReactNode;
  onClose: () => void;
}

export interface IEditForm {
  onFormSubmit: (values: IValues) => Promise<any>;
  nameToUpdate: string;
  numberToUpdate: string;
}

export interface IContactsState {
  items: IContact[];
  isLoading: string | null;
  // error: string | undefined | null;
}
