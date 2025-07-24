import { Microscope, Target, Cog, Shield, Heart } from 'lucide-react';
import Layout from '../components/Layout';

const Research = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-lighter via-accent to-background section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-primary">Our Research</h1>
            <p className="text-large">
              Rigorous, open, and replicable behavioral science research to improve health outcomes
            </p>
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-12">Research Philosophy</h2>
            <div className="card-academic text-center">
              <p className="text-academic mb-6">
                We focus on rigorous, open, and replicable behavioral science research to improve 
                health outcomes. Our approach emphasizes scientific integrity, methodological rigor, 
                and the translation of research findings into practical, scalable interventions.
              </p>
              <p className="text-academic">
                Every study we conduct follows evidence-based methodologies and adheres to the 
                highest ethical standards, ensuring our research contributes meaningfully to the 
                advancement of behavioral health science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Research Areas */}
      <section className="section-padding bg-accent">
        <div className="section-container">
          <h2 className="heading-secondary text-center mb-12">Core Research Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-hover bg-background">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cancer Prevention and Control</h3>
              <p className="text-muted-foreground">
                Developing and testing behavioral interventions for cancer prevention, early detection, 
                and survivorship support. Our research focuses on evidence-based strategies to reduce 
                cancer risk and improve quality of life for cancer survivors.
              </p>
            </div>

            <div className="card-hover bg-background">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Psychosocial Aspects of Cancer Survivorship</h3>
              <p className="text-muted-foreground">
                Investigating the psychological and social factors that impact cancer survivors' 
                well-being. We study adaptation, resilience, and the development of targeted 
                interventions to support survivors' mental health and quality of life.
              </p>
            </div>

            <div className="card-hover bg-background">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center mb-6">
                <Microscope className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Obesity Treatment</h3>
              <p className="text-muted-foreground">
                Researching behavioral approaches to obesity prevention and treatment. Our work 
                focuses on sustainable lifestyle interventions and the psychological factors 
                that influence long-term weight management success.
              </p>
            </div>

            <div className="card-hover bg-background">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-light to-secondary rounded-full flex items-center justify-center mb-6">
                <Cog className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Scalable Clinical Interventions</h3>
              <p className="text-muted-foreground">
                Developing efficient, scalable behavioral health interventions that can be 
                implemented across diverse healthcare settings. We focus on creating practical 
                solutions that maintain effectiveness while being feasible for widespread adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Tools */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-12">Our Approach & Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-academic">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Ethical Standards</h3>
                <p className="text-muted-foreground">
                  All research follows IRB-approved protocols and maintains the highest ethical 
                  standards. We ensure participant safety and data privacy in every study we conduct.
                </p>
              </div>

              <div className="card-academic">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-light rounded-lg flex items-center justify-center mb-4">
                  <Cog className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Research Tools</h3>
                <div className="text-muted-foreground">
                  <p className="mb-2">We utilize industry-standard tools to ensure quality and compliance:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>REDCap for secure data management</li>
                    <li>OnCore for clinical trial management</li>
                    <li>HIPAA-compliant Box for file storage</li>
                    <li>SPSS for statistical analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card-academic mt-8 bg-primary-lighter">
              <h3 className="text-lg font-semibold mb-4">Open Science Commitment</h3>
              <p className="text-foreground">
                We are committed to open science practices, including pre-registration of studies, 
                transparent reporting of methods and results, and sharing data when appropriate. 
                Our goal is to contribute to reproducible and replicable behavioral science research 
                that advances the field and benefits public health.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Research;