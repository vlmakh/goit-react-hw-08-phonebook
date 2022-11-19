// import { Box } from 'components/Box/Box';
import { Button, StyledForm, StyledField, Label } from './Login.styled';
import { Formik } from 'formik';
// import { NavLink, useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import css from './Home.module.css';

export default function Login() {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        login: '',
        password: '',
      }}
    >
      <StyledForm>
        <Label htmlFor="login">
          <span>login</span>
          <StyledField name="login" type="text" placeholder=" "></StyledField>
        </Label>

        <Label htmlFor="password">
          <span>password </span>
          <StyledField
            name="password"
            type="password"
            placeholder=" "
            autocomplete="off"
          ></StyledField>
        </Label>

        <Button type="submit">Login</Button>
      </StyledForm>
    </Formik>
  );
}
