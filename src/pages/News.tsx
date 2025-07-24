import { Calendar, Award, Users, Presentation, BookOpen } from 'lucide-react';
import Layout from '../components/Layout';

const News = () => {
  const newsItems = [
    {
      date: 'July 2025',
      type: 'Conference',
      icon: Presentation,
      title: 'Lab Presentations at SBM Annual Conference',
      description: 'Our team presented three posters at the Society of Behavioral Medicine Annual Meeting, showcasing our latest research on digital health interventions and cancer survivorship.',
      highlight: true
    },
    {
      date: 'June 2025',
      type: 'Achievement',
      icon: Award,
      title: 'Congratulations Dr. Jane Doe on Dissertation Defense',
      description: 'We celebrate the successful dissertation defense of Dr. Jane Doe, whose research on behavioral interventions for cancer survivors will make a significant impact in the field.',
      highlight: false
    },
    {
      date: 'May 2025',
      type: 'Grant',
      icon: Award,
      title: 'New NCI Grant Awarded for Survivorship Study',
      description: 'The Vitality Lab received a new grant from the National Cancer Institute to conduct a longitudinal study on psychosocial factors in cancer survivorship.',
      highlight: true
    },
    {
      date: 'April 2025',
      type: 'Publication',
      icon: BookOpen,
      title: 'New Publication in Journal of Behavioral Medicine',
      description: 'Our systematic review on digital health interventions for cancer survivors has been published, contributing valuable insights to the field.',
      highlight: false
    },
    {
      date: 'March 2025',
      type: 'Team',
      icon: Users,
      title: 'Welcome New Research Fellows',
      description: 'We are excited to welcome two new research fellows to our team who will be contributing to our ongoing studies on behavioral health interventions.',
      highlight: false
    },
    {
      date: 'February 2025',
      type: 'Award',
      icon: Award,
      title: 'Dr. Reading Receives UIC Excellence in Research Award',
      description: 'Principal Investigator Dr. Jean Reading was honored with the UIC Excellence in Research Award for her contributions to behavioral science research.',
      highlight: true
    }
  ];

  const getIconBgColor = (type: string) => {
    switch (type) {
      case 'Conference':
        return 'from-primary to-primary-light';
      case 'Achievement':
      case 'Award':
        return 'from-secondary to-secondary-light';
      case 'Grant':
        return 'from-primary-light to-primary';
      case 'Publication':
        return 'from-secondary-light to-secondary';
      case 'Team':
        return 'from-primary to-primary-light';
      default:
        return 'from-primary to-primary-light';
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-lighter via-accent to-background section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-primary">Lab News & Updates</h1>
            <p className="text-large">
              Stay updated with the latest developments, achievements, and milestones from the Vitality Lab
            </p>
          </div>
        </div>
      </section>

      {/* News Timeline */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {newsItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className={`card-hover relative ${
                      item.highlight ? 'ring-2 ring-primary ring-opacity-20' : ''
                    }`}
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon and Date */}
                      <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${getIconBgColor(
                            item.type
                          )} rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-center md:text-left">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">{item.date}</span>
                          </div>
                          <span className="text-sm text-primary font-medium">{item.type}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-academic text-muted-foreground">{item.description}</p>
                        
                        {item.highlight && (
                          <div className="mt-4 inline-flex items-center px-3 py-1 bg-primary-lighter text-primary text-sm rounded-full">
                            <Award className="h-4 w-4 mr-2" />
                            Featured Update
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-accent">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-12">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-academic bg-background">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Presentation className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Research Symposium</h3>
                    <p className="text-sm text-primary font-medium mb-2">September 2025</p>
                    <p className="text-muted-foreground text-sm">
                      Annual research symposium featuring presentations from lab members and 
                      guest speakers in behavioral health.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-academic bg-background">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Lab Retreat</h3>
                    <p className="text-sm text-primary font-medium mb-2">October 2025</p>
                    <p className="text-muted-foreground text-sm">
                      Annual team retreat focused on collaboration, planning, and 
                      professional development activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-secondary mb-6">Stay Connected</h2>
            <p className="text-large mb-8">
              Want to stay updated with our latest research, publications, and lab activities?
            </p>
            <div className="card-academic bg-primary-lighter">
              <p className="text-academic mb-6">
                Follow our research progress and get notified about new publications, 
                conference presentations, and opportunities to join our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/join" className="btn-primary">
                  Join Our Lab
                </a>
                <a href="/publications" className="btn-outline">
                  View Publications
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;