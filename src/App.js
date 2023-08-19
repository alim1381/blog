import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import AuthorsPage from './components/authors/AuthorsPage'
import BlogsPage from './components/blogs/BlogsPage'
import Layout from './components/layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/authors/:slug' element={<AuthorsPage />} />
        <Route path='/blogs/:slug' element={<BlogsPage />} />

        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </Layout>
  );
}

export default App;
