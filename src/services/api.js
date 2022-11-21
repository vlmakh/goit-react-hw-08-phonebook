import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phonebookApi = createApi({
  reducerPath: 'phonebook',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contact'],

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      method: 'GET',
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),

    updateContact: builder.mutation({
      query: ({ id, ...updatedContact }) => ({
        url: `/contacts/${id}`,
        method: 'PUT',
        body: updatedContact,
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = phonebookApi;
