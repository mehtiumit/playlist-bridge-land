import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { AppleLogo, GooglePlayLogo } from "@phosphor-icons/react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      <div className="hero-gradient absolute inset-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Playlist Bridge
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Seamless playlist transfer between Spotify & YouTube Music
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              <AppleLogo size={24} className="mr-2" />
              Download on App Store
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-3 text-lg">
              <GooglePlayLogo size={24} className="mr-2" />
              Get it on Google Play
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <div className="w-48 h-96 bg-gradient-to-b from-card to-muted rounded-2xl mx-auto shadow-2xl border border-border relative overflow-hidden">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-muted-foreground rounded-full" />
                <div className="p-6 pt-12">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-lg" />
                      <span className="text-sm font-medium text-card-foreground">Spotify</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded w-full" />
                      <div className="h-2 bg-muted rounded w-3/4" />
                      <div className="h-2 bg-muted rounded w-1/2" />
                    </div>
                    <div className="flex justify-center py-4">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-accent-foreground text-2xl">→</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary rounded-lg" />
                      <span className="text-sm font-medium text-card-foreground">YouTube Music</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded w-full" />
                      <div className="h-2 bg-muted rounded w-3/4" />
                      <div className="h-2 bg-muted rounded w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}