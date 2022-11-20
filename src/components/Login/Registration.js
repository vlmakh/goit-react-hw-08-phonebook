import { Button, StyledForm, StyledField, Label } from './Login.styled';
import { Formik } from 'formik';

// import { NavLink, useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import css from './Home.module.css';

export default function Registration() {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      onSubmit={handleSubmit}
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
            type="password"
            placeholder=" "
            autoComplete="off"
          ></StyledField>
        </Label>

        <Button type="submit">Register</Button>
      </StyledForm>
    </Formik>
  );
}
