import { Heart, Users, GraduationCap, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const Join = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-lighter via-accent to-background section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-primary">Join Our Lab</h1>
            <p className="text-large">
              Become part of a supportive, inclusive team dedicated to advancing behavioral science research
            </p>
          </div>
        </div>
      </section>

      {/* Lab Culture */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-12">Our Lab Culture</h2>
            <div className="card-academic mb-8">
              <p className="text-academic mb-6">
                We foster a supportive, respectful, and inclusive environment where integrity and 
                growth are core values. Our lab operates on principles of collaboration, mentorship, 
                and mutual respect, creating a space where every team member can thrive and contribute 
                meaningfully to advancing behavioral science.
              </p>
              <p className="text-academic">
                Whether you're a graduate student seeking research experience, a postdoctoral fellow 
                looking to advance your career, or an undergraduate interested in behavioral health, 
                we welcome individuals who are passionate about making a positive impact through research.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-hover text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-3">Supportive Environment</h3>
                <p className="text-muted-foreground text-sm">
                  We prioritize well-being and provide mentorship to help every team member succeed 
                  both personally and professionally.
                </p>
              </div>

              <div className="card-hover text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="font-semibold mb-3">Collaborative Spirit</h3>
                <p className="text-muted-foreground text-sm">
                  Research is a team effort. We encourage collaboration, knowledge sharing, 
                  and mutual support among all lab members.
                </p>
              </div>

              <div className="card-hover text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-3">Growth Mindset</h3>
                <p className="text-muted-foreground text-sm">
                  We're committed to continuous learning and development, providing opportunities 
                  for skill building and career advancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations & Opportunities */}
      <section className="section-padding bg-accent">
        <div className="section-container">
          <h2 className="heading-secondary text-center mb-12">Opportunities & Expectations</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Graduate Students */}
            <div className="card-academic bg-background">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">Graduate Students</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-primary">Responsibilities:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          Lead data analysis and interpretation
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          Mentor undergraduate students and interns
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          Contribute to manuscript preparation
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          Present research at conferences
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-primary">Benefits:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          Hands-on research experience
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          Publication opportunities
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          Conference presentation support
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          Professional development mentoring
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Fellows */}
            <div className="card-academic bg-background">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">Research Fellows</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-primary">Commitment:</h4>
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">12-18 hours per week</span>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          Support ongoing research projects
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          Data collection and management
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          Literature reviews and research synthesis
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-primary">Experience Gained:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          Research methodology training
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          Statistical analysis skills
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          Academic writing experience
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          Professional networking
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Interns */}
            <div className="card-academic bg-background">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">Research Interns</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3 text-primary">Requirements:</h4>
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">6-10 hours/week, minimum 3 quarters</span>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          Volunteer basis with academic credit option
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          Commitment to full academic year
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          Interest in behavioral health research
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3 text-primary">Learning Opportunities:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          Introduction to research methods
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          Data collection experience
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          Mentorship from graduate students
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                          Career guidance and support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Job Posting */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-12">Current Opening</h2>
            <div className="card-academic border-l-4 border-l-primary">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Postdoctoral Fellow in Behavioral Science</h3>
                <p className="text-primary font-medium">Full-time Position | Competitive Salary | Benefits Included</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Position Overview</h4>
                  <p className="text-academic text-muted-foreground">
                    We are seeking a motivated postdoctoral fellow to join our research team focused on 
                    behavioral science applications in health promotion and disease prevention. The successful 
                    candidate will contribute to ongoing research projects while developing their independent 
                    research program.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Requirements</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>PhD in Psychology, Public Health, or related field</li>
                    <li>Strong background in behavioral science research methods</li>
                    <li>Experience with statistical analysis software (SPSS, R, or similar)</li>
                    <li>Excellent written and verbal communication skills</li>
                    <li>Commitment to diversity, equity, and inclusion</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Responsibilities</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Lead data analysis and interpretation for ongoing studies</li>
                    <li>Prepare manuscripts for publication in peer-reviewed journals</li>
                    <li>Mentor graduate students and research assistants</li>
                    <li>Contribute to grant writing and research proposal development</li>
                    <li>Present research findings at national conferences</li>
                    <li>Develop independent research projects aligned with lab priorities</li>
                  </ul>
                </div>

                <div className="bg-accent p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">How to Apply</h4>
                  <p className="text-muted-foreground mb-4">
                    Interested candidates should submit a cover letter, CV, and contact information 
                    for three references. Please include a brief statement of research interests 
                    and career goals.
                  </p>
                  <button className="btn-primary">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Opportunities */}
      <section className="section-padding bg-primary-lighter">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-secondary mb-6">Interested in Joining Our Team?</h2>
            <p className="text-large mb-8">
              Even if there are no current openings that match your background, we encourage 
              you to reach out. We're always interested in connecting with passionate researchers.
            </p>
            <div className="card-academic bg-background">
              <p className="text-academic mb-6">
                Send us your CV and a brief note about your research interests. We'll keep your 
                information on file and contact you when relevant opportunities become available.
              </p>
              <button className="btn-primary">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;