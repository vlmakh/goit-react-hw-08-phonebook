import {
  StyledForm,
  StyledField,
  Label,
  StyledErrorMsg,
  Button,
} from './Login.styled';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/operations';
import * as yup from 'yup';
import { selectIsCheckingLogin } from 'redux/selectors';
import { ICredentials, IResetForm } from 'components/types';
import { AppDispatch } from 'redux/store';

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const isCheckingLogin = useSelector(selectIsCheckingLogin);

  console.log('isCheckingLogin', isCheckingLogin)

  const handleSubmit = (values: ICredentials, { resetForm }: IResetForm) => {
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
      validationSchema={schema}
    >
      <StyledForm>
        <Label htmlFor="email">
          <span>email</span>
          <StyledField name="email" type="text" placeholder=" "></StyledField>
          <StyledErrorMsg component="div" name="email" />
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

        <Button type="submit">
          Login
        </Button>
      </StyledForm>
    </Formik>
  );
}
