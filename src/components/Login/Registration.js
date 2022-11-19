import { Box } from 'components/Box/Box';
import { Button } from './Login.styled';
// import { NavLink, useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import css from './Home.module.css';

export default function LoginPage() {
  return (
    <Box p={3} textAlign="center">
      <form>
        <label>
          login
          <input></input>
        </label>
        <label>
          email
          <input></input>
        </label>
        <label>
          password
          <input></input>
        </label>
        <Button type="submit">Register</Button>
      </form>
    </Box>
  );
}
