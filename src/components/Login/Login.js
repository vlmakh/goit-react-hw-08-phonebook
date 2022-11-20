import { Button, StyledForm, StyledField, Label } from './Login.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/operations';
// import { NavLink, useLocation } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      <StyledForm>
        <Label htmlFor="email">
          <span>email</span>
          <StyledField name="email" type="text" placeholder=" "></StyledField>
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

        <Button type="submit">Login</Button>
      </StyledForm>
    </Formik>
  );
}
