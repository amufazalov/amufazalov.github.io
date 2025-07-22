import React from 'react';
import { HeroSection } from '../../widgets/hero-section';
import { SkillsSection } from '../../widgets/skills-section';
import { CertificatesSection } from '../../widgets/certificates-section';
import { ProjectsSection } from '../../widgets/projects-section';
import { ExperienceSection } from '../../widgets/experience-section';
import { ContactSection } from '../../widgets/contact-section';
import { CompaniesSection } from '../../widgets/companies-section';

export const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden"> 
      <HeroSection />
      <SkillsSection />
      <CertificatesSection />
      <ProjectsSection />
      <ExperienceSection />
      <CompaniesSection />
      <ContactSection />
    </div>
  );
}; 