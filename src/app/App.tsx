import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/home/index';
import { ProjectsPage } from '../pages/projects/index';
import { ProjectDetailPage } from '../pages/project-detail/index';
import { Layout } from '../widgets/layout/index';
import { ScrollToTop } from './scroll-to-top';

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}; 