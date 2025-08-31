import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { BsApple, BsGooglePlay, BsDownload, BsStars, BsCheckCircle, BsLightning } from "react-icons/bs"

export function DownloadSection() {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/10 to-secondary/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 180, 360],
              scale: [0.5, 1, 0.5],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            <BsDownload size={12} className="text-primary/20" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Header icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block p-6 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl mb-8"
          >
            <BsDownload size={48} className="text-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Ready to Bridge
            </span>
            <br />
            <span className="text-foreground">Your Playlists?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Download Playlist Bridge today and join thousands of music lovers who've discovered 
            the magic of seamless playlist transfers. Your music, everywhere you want it.
          </motion.p>
          
          {/* Download buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <Button size="lg" className="relative bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-xl">
                <BsApple size={28} className="mr-3" />
                Download on App Store
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <Button size="lg" variant="outline" className="relative border-2 border-secondary/50 text-secondary hover:bg-gradient-to-r hover:from-secondary/10 hover:to-accent/10 hover:border-secondary px-10 py-6 text-lg font-bold rounded-2xl backdrop-blur-sm">
                <BsGooglePlay size={28} className="mr-3" />
                Get it on Google Play
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Features highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
          >
            {[
              { icon: BsCheckCircle, text: "Free to download", desc: "No hidden costs" },
              { icon: BsLightning, text: "Instant transfers", desc: "Works in seconds" },
              { icon: BsStars, text: "Premium experience", desc: "Ad-free forever" }
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                className="flex flex-col items-center space-y-3 p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/30 hover:bg-card/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <feature.icon size={24} className="text-primary" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-card-foreground">{feature.text}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>500K+ downloads</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>4.9★ rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span>Available worldwide</span>
            </div>
          </motion.div>

          {/* Call to action box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 backdrop-blur-sm border border-border/30"
          >
            <h3 className="text-2xl font-bold text-card-foreground mb-4">What are you waiting for?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your playlists are ready to travel. Download Playlist Bridge now and experience 
              the freedom of having your music everywhere you go.
            </p>
            <motion.button
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Musical Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}