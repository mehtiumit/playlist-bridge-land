import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { AppleLogo, GooglePlayLogo } from "@phosphor-icons/react"

export function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Bridge Your Playlists?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Download Playlist Bridge today and start enjoying your music across all platforms
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              <AppleLogo size={24} className="mr-3" />
              Download on App Store
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg">
              <GooglePlayLogo size={24} className="mr-3" />
              Get it on Google Play
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Free to download • No subscription required • Works offline
          </p>
        </motion.div>
      </div>
    </section>
  )
}