import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, FlaskConical } from 'lucide-react';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-lighter via-accent to-background section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-primary">
              Welcome to the <span className="text-primary">Vitality Lab</span>
            </h1>
            <div className="text-large mb-8">
              Department of Family and Community Medicine<br />
              University of Illinois Chicago (UIC)
            </div>
            <p className="text-xl text-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
              Our mission is to generate behavioral science evidence to improve health and well-being. 
              We value scientific rigor, well-being, and service to others through evidence-based research 
              and clinical interventions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/research" className="btn-primary">
                Learn About Our Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/team" className="btn-outline">
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Highlights */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Health & Well-being</h3>
              <p className="text-muted-foreground">
                Dedicated to improving health outcomes through rigorous behavioral science research 
                and evidence-based interventions.
              </p>
            </div>
            
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <FlaskConical className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Scientific Rigor</h3>
              <p className="text-muted-foreground">
                Committed to open, replicable research methodologies and maintaining the highest 
                standards of scientific integrity.
              </p>
            </div>
            
            <div className="card-hover text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Service to Others</h3>
              <p className="text-muted-foreground">
                Fostering an inclusive environment focused on mentorship, collaboration, 
                and making a positive impact in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PI Message */}
      <section className="section-padding bg-accent">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-secondary">From Our Principal Investigator</h2>
            </div>
            <div className="card-academic bg-background">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto flex items-center justify-center">
                    <img 
                      src="https://res.cloudinary.com/dmortrkhj/image/upload/v1753392813/03_Jreading_Headshot_-_Jean_Reading_uzuvlt.jpg"
                      alt="Dr. Jean M. Reading"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4">Dr. Jean M. Reading, PhD</h3>
                  <p className="text-academic mb-6">
                    "I lead the Vitality Lab with a coaching philosophy that emphasizes integrity, 
                    inclusion, and personal growth. My goal is to implement evidence-based treatments 
                    in scalable, efficient ways that can make a real difference in people's lives."
                  </p>
                  <p className="text-academic">
                    "Our lab is committed to fostering an environment where every team member can 
                    thrive while contributing to meaningful research that advances health and well-being 
                    in our communities."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center">
            <h2 className="heading-secondary mb-6">Ready to Join Our Mission?</h2>
            <p className="text-large mb-8 max-w-2xl mx-auto">
              We're always looking for passionate researchers and students who want to make 
              a difference through behavioral science research.
            </p>
            <Link to="/join" className="btn-primary text-lg px-10 py-5">
              Join Our Lab
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
