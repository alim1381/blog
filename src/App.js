import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AuthorPage from './components/authors/AuthorPage'
import BlogsPage from './components/blogs/BlogsPage'
import Layout from './components/layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/authors/:slug' element={<AuthorPage />} />
        <Route path='/blogs/:slug' element={<BlogsPage />} />

        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </Layout>
  );
}

export default App;
