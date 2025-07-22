import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { ProjectsPage } from '../pages/projects';
import { ProjectDetailPage } from '../pages/project-detail';
import { Layout } from '../widgets/layout';

export const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}; 