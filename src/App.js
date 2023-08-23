import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AuthorPage from './components/authors/AuthorPage'
import Layout from './components/layout';
import BlogPage from './components/blogs/BlogPage';
import ScrollToTop from './components/shared/ScrollToTop';
import LoginPage from './components/login/LoginPage';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/authors/:slug' element={<AuthorPage />} />
          <Route path='/blogs/:slug' element={<BlogPage />} />

          <Route path='/login' element={<LoginPage />} />

          <Route path='/*' element={<Navigate to={'/'} />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
