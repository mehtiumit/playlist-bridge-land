import { TwitterLogo, InstagramLogo, FacebookLogo, GithubLogo } from "@phosphor-icons/react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-card-foreground">Playlist Bridge</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              The easiest way to transfer your playlists between Spotify and YouTube Music. 
              Keep your music collection synchronized across all platforms.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Playlist Bridge. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
              <TwitterLogo size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
              <InstagramLogo size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
              <FacebookLogo size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
              <GithubLogo size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}