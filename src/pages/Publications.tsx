import { BookOpen, Users, Award, ExternalLink } from 'lucide-react';
import Layout from '../components/Layout';

const Publications = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-lighter via-accent to-background section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-primary">Publications</h1>
            <p className="text-large">
              Our commitment to advancing behavioral science through rigorous research and scholarship
            </p>
          </div>
        </div>
      </section>

      {/* Authorship Philosophy */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-12">Our Authorship Philosophy</h2>
            <div className="card-academic">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">ICMJE Guidelines & "Pay It Forward" Approach</h3>
                  <p className="text-academic mb-4">
                    We strictly follow the International Committee of Medical Journal Editors (ICMJE) 
                    guidelines for authorship, ensuring that authorship reflects meaningful contribution 
                    and collaboration in our research endeavors.
                  </p>
                  <p className="text-academic">
                    Our lab operates on a "pay it forward" philosophy, where experienced researchers 
                    mentor and support emerging scholars, fostering a collaborative environment that 
                    benefits the entire team and advances the field of behavioral science.
                  </p>
                </div>
              </div>
              
              <div className="bg-accent p-6 rounded-lg mt-6">
                <h4 className="font-semibold mb-3">Authorship Criteria</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Substantial contribution to conception, design, or data acquisition</li>
                  <li>Significant involvement in data analysis and interpretation</li>
                  <li>Participation in drafting or critical revision of the manuscript</li>
                  <li>Final approval of the version to be published</li>
                  <li>Agreement to be accountable for all aspects of the work</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Publications */}
      <section className="section-padding bg-accent">
        <div className="section-container">
          <h2 className="heading-secondary text-center mb-12">Selected Publications</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Publication 1 */}
            <div className="card-hover bg-background">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-3">
                    Digital Health Interventions for Cancer Survivors: A Systematic Review and Meta-Analysis
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    Reading, J.M., et al. (2024)
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <em>Journal of Behavioral Medicine, 47(3), 245-262</em>
                  </p>
                  <p className="text-academic mb-4">
                    This comprehensive systematic review examined the effectiveness of digital health 
                    interventions in improving quality of life and health outcomes among cancer survivors. 
                    The meta-analysis included 28 randomized controlled trials and provides evidence-based 
                    recommendations for implementing digital interventions in survivorship care.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-lighter text-primary text-sm rounded-full">
                      Cancer Survivorship
                    </span>
                    <span className="px-3 py-1 bg-secondary-light text-secondary text-sm rounded-full">
                      Digital Health
                    </span>
                    <span className="px-3 py-1 bg-primary-lighter text-primary text-sm rounded-full">
                      Meta-Analysis
                    </span>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
            </div>

            {/* Publication 2 */}
            <div className="card-hover bg-background">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-3">
                    Behavioral Interventions for Obesity Treatment in Primary Care Settings: Implementation and Outcomes
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    Lingala, N.M.R., & Reading, J.M. (2025)
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <em>American Journal of Preventive Medicine, 68(2), 178-186</em>
                  </p>
                  <p className="text-academic mb-4">
                    This study evaluated the implementation and effectiveness of a brief behavioral 
                    intervention for obesity treatment within primary care settings. Results demonstrate 
                    significant improvements in weight management and patient engagement, with implications 
                    for scalable clinical practice.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-secondary-light text-secondary text-sm rounded-full">
                      Obesity Treatment
                    </span>
                    <span className="px-3 py-1 bg-primary-lighter text-primary text-sm rounded-full">
                      Primary Care
                    </span>
                    <span className="px-3 py-1 bg-secondary-light text-secondary text-sm rounded-full">
                      Implementation Science
                    </span>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
            </div>

            {/* Publication 3 */}
            <div className="card-hover bg-background">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-3">
                    Psychosocial Factors in Cancer Prevention: A Longitudinal Cohort Study
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    Reading, J.M., Smith, A.B., & Johnson, C.D. (2024)
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <em>Psycho-Oncology, 33(8), 1123-1135</em>
                  </p>
                  <p className="text-academic mb-4">
                    A 5-year longitudinal study examining the role of psychosocial factors in cancer 
                    prevention behaviors. The research identifies key psychological predictors of 
                    screening adherence and provides insights for developing targeted behavioral interventions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-lighter text-primary text-sm rounded-full">
                      Cancer Prevention
                    </span>
                    <span className="px-3 py-1 bg-secondary-light text-secondary text-sm rounded-full">
                      Longitudinal Study
                    </span>
                    <span className="px-3 py-1 bg-primary-lighter text-primary text-sm rounded-full">
                      Psycho-Oncology
                    </span>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-12">Research Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-academic text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Peer-reviewed publications</p>
              </div>
              
              <div className="card-academic text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Citations across our work</p>
              </div>
              
              <div className="card-academic text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">8</h3>
                <p className="text-muted-foreground">Active research projects</p>
              </div>
            </div>
            
            <div className="card-academic mt-12 bg-primary-lighter text-center">
              <h3 className="text-xl font-semibold mb-4">Open Access Commitment</h3>
              <p className="text-academic">
                We are committed to making our research accessible to the broader scientific community. 
                When possible, we publish in open access journals and share our findings through 
                preprint servers to accelerate the dissemination of knowledge in behavioral health science.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Publications;