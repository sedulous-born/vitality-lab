import { GraduationCap, Users, Star, Quote } from 'lucide-react';
import Layout from '../components/Layout';

const Team = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-lighter via-accent to-background section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-primary">Our Team</h1>
            <p className="text-large">
              A diverse, collaborative group dedicated to advancing behavioral science research
            </p>
          </div>
        </div>
      </section>

      {/* Principal Investigator */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-12">Principal Investigator</h2>
            <div className="card-academic">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/3">
                  <div className="w-64 h-64 bg-white rounded-xl mx-auto flex items-center justify-center">
                    <img 
                      src="https://res.cloudinary.com/dmortrkhj/image/upload/v1753392813/03_Jreading_Headshot_-_Jean_Reading_uzuvlt.jpg"
                      alt="Dr. Jean M. Reading"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-3xl font-semibold mb-2">Dr. Jean M. Reading, PhD</h3>
                  <p className="text-primary font-medium mb-6">Principal Investigator & Lab Director</p>
                  <p className="text-academic mb-4">
                    Dr. Reading is a behavioral scientist with extensive training in psychology and 
                    cancer prevention. She leads the Vitality Lab with a coaching philosophy that 
                    emphasizes integrity, inclusion, and personal growth.
                  </p>
                  <p className="text-academic mb-6">
                    Her research focuses on implementing evidence-based treatments in scalable, 
                    efficient ways that can make a meaningful impact on health outcomes. She is 
                    committed to fostering an environment where every team member can thrive while 
                    contributing to impactful research.
                  </p>
                  <div className="bg-accent p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Quote className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground italic">
                        "My goal is to create a lab environment where rigorous science meets 
                        compassionate mentorship, allowing each team member to reach their full potential."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Structure */}
      <section className="section-padding bg-accent">
        <div className="section-container">
          <h2 className="heading-secondary text-center mb-12">Lab Structure & Roles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-hover bg-background text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Research Associate</h3>
              <p className="text-sm text-muted-foreground">
                Oversees daily lab operations, coordinates research activities, and provides 
                training and mentorship to team members.
              </p>
            </div>

            <div className="card-hover bg-background text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Graduate Students</h3>
              <p className="text-sm text-muted-foreground">
                Lead scholarly projects, conduct independent research, and mentor undergraduate 
                students and interns.
              </p>
            </div>

            <div className="card-hover bg-background text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Fellows</h3>
              <p className="text-sm text-muted-foreground">
                Support ongoing research projects while gaining valuable experience in 
                behavioral science research methodologies.
              </p>
            </div>

            <div className="card-hover bg-background text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-light to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Interns</h3>
              <p className="text-sm text-muted-foreground">
                Participate in research activities, gain hands-on experience, and contribute 
                to lab projects while learning research skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Team Members */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="heading-secondary text-center mb-12">Current Team Members</h2>
          <div className="max-w-4xl mx-auto">
            <div className="card-academic">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/4">
                  <div className="w-32 h-32 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondary-foreground">NL</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">Naga Malleshwar Reddy Lingala</h3>
                  <p className="text-primary font-medium mb-4">Summer Research Fellow</p>
                  <p className="text-academic mb-4">
                    Naga brings enthusiasm and fresh perspectives to our research on behavioral 
                    interventions. As a Summer Research Fellow, he contributes to ongoing projects 
                    while developing his research skills in behavioral science methodologies.
                  </p>
                  <div className="bg-accent p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Quote className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-foreground italic text-sm">
                        "Working in the Vitality Lab has given me invaluable experience in rigorous 
                        research methods and shown me the real impact behavioral science can have on health."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-large text-muted-foreground">
                We're always looking for passionate researchers to join our team.
              </p>
              <a href="/join" className="btn-primary mt-4 inline-flex items-center">
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Values */}
      <section className="section-padding bg-primary-lighter">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-secondary mb-8">Our Lab Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-academic bg-background">
                <h3 className="text-lg font-semibold mb-3 text-primary">Integrity</h3>
                <p className="text-muted-foreground">
                  We maintain the highest ethical standards in all our research and interactions, 
                  ensuring transparency and honesty in everything we do.
                </p>
              </div>
              <div className="card-academic bg-background">
                <h3 className="text-lg font-semibold mb-3 text-primary">Inclusion</h3>
                <p className="text-muted-foreground">
                  We foster a diverse, welcoming environment where all team members can contribute 
                  their unique perspectives and feel valued.
                </p>
              </div>
              <div className="card-academic bg-background">
                <h3 className="text-lg font-semibold mb-3 text-primary">Growth</h3>
                <p className="text-muted-foreground">
                  We are committed to the personal and professional development of every team member 
                  through mentorship and collaborative learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;