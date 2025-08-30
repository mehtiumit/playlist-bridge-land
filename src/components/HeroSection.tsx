import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { AppleLogo, GooglePlayLogo, MusicNotes, Play, ArrowRight } from "@phosphor-icons/react"

// Animated wave bars component
function AnimatedWaves() {
  const bars = Array.from({ length: 40 }, (_, i) => i)
  
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
      <div className="flex items-end space-x-1">
        {bars.map((bar) => (
          <motion.div
            key={bar}
            className="w-1 bg-gradient-to-t from-primary via-accent to-secondary"
            animate={{
              height: [20, Math.random() * 100 + 20, 20],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: bar * 0.05,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 animate-pulse" />
      </div>
      
      {/* Animated wave background */}
      <AnimatedWaves />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Playlist
                </span>
                <br />
                <span className="text-foreground">Bridge</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Seamless playlist transfer
                </span>
                <br />
                between Spotify & YouTube Music
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <AppleLogo size={24} className="mr-3" weight="bold" />
                  Download on App Store
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-secondary/50 text-secondary hover:bg-gradient-to-r hover:from-secondary/10 hover:to-accent/10 hover:border-secondary px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm">
                  <GooglePlayLogo size={24} className="mr-3" weight="bold" />
                  Get it on Google Play
                </Button>
              </motion.div>
            </motion.div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: MusicNotes, text: "One-click transfer" },
                { icon: Play, text: "Smart sync" },
                { icon: ArrowRight, text: "Cross-platform" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  className="flex items-center space-x-2 bg-card/30 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <feature.icon size={16} className="text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl scale-110 rounded-full" />
              
              {/* Phone mockup */}
              <motion.div
                className="relative w-80 h-[600px] bg-gradient-to-b from-card via-card/90 to-card/80 rounded-[3rem] shadow-2xl border-4 border-border/50 overflow-hidden floating"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Phone bezel */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-muted-foreground/30 rounded-full" />
                
                {/* Screen content */}
                <div className="p-8 pt-16 h-full">
                  {/* App header */}
                  <motion.div 
                    className="flex items-center justify-between mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                        <MusicNotes size={20} className="text-white" weight="bold" />
                      </div>
                      <span className="text-lg font-bold text-card-foreground">Playlist Bridge</span>
                    </div>
                  </motion.div>

                  {/* Transfer visualization */}
                  <div className="space-y-8">
                    {/* Spotify section */}
                    <motion.div
                      className="bg-gradient-to-r from-primary/20 to-primary/10 p-4 rounded-2xl border border-primary/30"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <MusicNotes size={14} className="text-white" weight="bold" />
                        </div>
                        <span className="text-sm font-medium text-card-foreground">My Playlist</span>
                      </div>
                      <div className="space-y-2">
                        {[100, 80, 60].map((width, i) => (
                          <motion.div
                            key={i}
                            className="h-2 bg-primary/40 rounded-full"
                            style={{ width: `${width}%` }}
                            initial={{ width: 0 }}
                            animate={{ width: `${width}%` }}
                            transition={{ delay: 1.6 + i * 0.1, duration: 0.5 }}
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Transfer arrow */}
                    <motion.div
                      className="flex justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center neon-glow">
                        <ArrowRight size={24} className="text-white" weight="bold" />
                      </div>
                    </motion.div>

                    {/* YouTube Music section */}
                    <motion.div
                      className="bg-gradient-to-r from-secondary/20 to-secondary/10 p-4 rounded-2xl border border-secondary/30"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8 }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                          <Play size={14} className="text-white" weight="bold" />
                        </div>
                        <span className="text-sm font-medium text-card-foreground">Transferred ✓</span>
                      </div>
                      <div className="space-y-2">
                        {[100, 80, 60].map((width, i) => (
                          <motion.div
                            key={i}
                            className="h-2 bg-secondary/40 rounded-full"
                            style={{ width: `${width}%` }}
                            initial={{ width: 0 }}
                            animate={{ width: `${width}%` }}
                            transition={{ delay: 2 + i * 0.1, duration: 0.5 }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}