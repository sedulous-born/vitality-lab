import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>{children}</main>
      <footer className="bg-accent border-t border-border mt-20">
        <div className="section-container py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">V</span>
                </div>
                <div className="font-merriweather font-bold text-lg">Vitality Lab</div>
              </div>
              <p className="text-muted-foreground">
                Behavioral science research to improve health and well-being at the University of Illinois Chicago.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Department of Family and Community Medicine</p>
                <p>University of Illinois Chicago</p>
                <p>Chicago, IL</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Research Areas</h3>
              <div className="space-y-1 text-muted-foreground">
                <p>Cancer Prevention & Control</p>
                <p>Behavioral Interventions</p>
                <p>Health Outcomes Research</p>
                <p>Clinical Psychology</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Vitality Lab, University of Illinois Chicago. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;