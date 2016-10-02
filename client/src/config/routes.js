import Base from '../components/Base.js';
import Home from '../components/Home.js';
import LoginForm from '../components/LoginForm.js';
import SignUpForm from '../components/SignUpForm.js';

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: Home
    },

    {
      path: '/login',
      component: LoginForm
    },

    {
      path: '/signup',
      component: SignUpForm
    }

  ]
};

export default routes;
