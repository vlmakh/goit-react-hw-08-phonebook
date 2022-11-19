import { Button, StyledForm, StyledField, Label } from './Login.styled';
import { Formik } from 'formik';

// import { NavLink, useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import css from './Home.module.css';

export default function LoginPage() {
  return (
    <Formik
      // onSubmit={}
      initialValues={{
        login: '',
        email: '',
        password: '',
      }}
    >
      <StyledForm>
        <Label htmlFor="login">
          <span>login</span>
          <StyledField name="login" type="text" placeholder=" "></StyledField>
        </Label>

        <Label htmlFor="email">
          <span>email</span>
          <StyledField name="email" type="email" placeholder=" "></StyledField>
        </Label>

        <Label htmlFor="password">
          <span>password </span>
          <StyledField
            name="password"
            type="text"
            placeholder=" "
            autocomplete="off"
          ></StyledField>
        </Label>

        <Button type="submit">Register</Button>
      </StyledForm>
    </Formik>
  );
}
