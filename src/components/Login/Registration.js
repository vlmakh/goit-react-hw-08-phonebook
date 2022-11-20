import { Button, StyledForm, StyledField, Label } from './Login.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';

export default function Registration() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    // console.log(values);
    dispatch(register(values));
    resetForm();
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
    >
      <StyledForm>
        <Label htmlFor="email">
          <span>email</span>
          <StyledField name="email" type="email" placeholder=" "></StyledField>
        </Label>

        <Label htmlFor="name">
          <span>name</span>
          <StyledField name="name" type="text" placeholder=" "></StyledField>
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
