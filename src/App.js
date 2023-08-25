import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AuthorPage from './components/authors/AuthorPage'
import Layout from './components/layout';
import BlogPage from './components/blogs/BlogPage';
import ScrollToTop from './components/shared/ScrollToTop';
import LoginPage from './components/login/LoginPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginAuth from './auth/LoginAuth';
import PrivateRoutes from './auth/PrivateRoutes';
import CreateBlog from './components/blogs/CreateBlog';
import SigninPage from './components/register/SigninPage';
import PublishAuthor from './components/register/PublishAuthor';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <ScrollToTop />
        <Routes>
          {/* public routes */}
          <Route path='/' element={<HomePage />} />
          <Route path='/authors/:slug' element={<AuthorPage />} />
          <Route path='/blogs/:slug' element={<BlogPage />} />

          {/* private routes */}
          <Route path='/createblog' element={<PrivateRoutes Component={<CreateBlog />} />} />
          <Route path='/publishauthor' element={<PrivateRoutes Component={<PublishAuthor />} />} />
          

          {/* only if she is not logged in */}
          <Route path='/login' element={<LoginAuth Component={<LoginPage />} />} />
          <Route path='/signin' element={<LoginAuth Component={<SigninPage />} />} />
          
          {/* redirect */}
          <Route path='/*' element={<Navigate to={'/'} />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
