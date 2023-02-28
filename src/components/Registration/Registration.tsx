import {
  Button,
  StyledForm,
  StyledField,
  Label,
  StyledErrorMsg,
} from 'components/Login/Login.styled';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/operations';
import * as yup from 'yup';
import { selectIsCheckingLogin } from 'redux/selectors';
import { ICredentials, IResetForm } from 'components/types';
import { AppDispatch } from 'redux/store';

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(7).required(),
});

export function Registration() {
  const dispatch = useDispatch<AppDispatch>();
  const isCheckingLogin = useSelector(selectIsCheckingLogin);

  const handleSubmit = (values: ICredentials, { resetForm }: IResetForm) => {
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
      validationSchema={schema}
    >
      <StyledForm>
        <Label htmlFor="email">
          <span>email</span>
          <StyledField name="email" type="email" placeholder=" "></StyledField>
          <StyledErrorMsg component="div" name="email" />
        </Label>

        <Label htmlFor="name">
          <span>name</span>
          <StyledField name="name" type="text" placeholder=" "></StyledField>
          <StyledErrorMsg component="div" name="name" />
        </Label>

        <Label htmlFor="password">
          <span>password </span>
          <StyledField
            name="password"
            type="password"
            placeholder=" "
            autoComplete="off"
          ></StyledField>
          <StyledErrorMsg component="div" name="password" />
        </Label>

        <Button type="submit" disabled={isCheckingLogin}>
          Register
        </Button>
      </StyledForm>
    </Formik>
  );
}
