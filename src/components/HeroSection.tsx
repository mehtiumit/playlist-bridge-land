import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { BsApple, BsGooglePlay, BsMusicNoteBeamed, BsPlay, BsArrowRight } from "react-icons/bs"

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
                <Button size="lg" className="bg-black hover:bg-black/90 text-white px-8 py-6 h-auto text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 group">
                  <BsApple size={28} className="mr-3 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase tracking-wider opacity-80 font-medium">Download on the</span>
                    <span className="text-xl font-bold">App Store</span>
                  </div>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-black hover:bg-black/90 text-white px-8 py-6 h-auto text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 group">
                  <BsGooglePlay size={26} className="mr-3 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase tracking-wider opacity-80 font-medium">Get it on</span>
                    <span className="text-xl font-bold">Google Play</span>
                  </div>
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
                { icon: BsMusicNoteBeamed, text: "One-click transfer" },
                { icon: BsPlay, text: "Smart sync" },
                { icon: BsArrowRight, text: "Cross-platform" }
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
                className="relative w-[360px] h-[720px] bg-gradient-to-b from-card via-card/95 to-card/90 rounded-[3rem] shadow-2xl border-[6px] border-border/50 overflow-hidden floating"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Phone bezel */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-full z-20 flex items-center justify-center space-x-2">
                  <div className="w-16 h-1.5 bg-gray-800 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
                </div>

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
                        <BsMusicNoteBeamed size={20} className="text-white" />
                      </div>
                      <span className="text-lg font-bold text-card-foreground">Playlist Bridge</span>
                    </div>
                  </motion.div>

                  {/* Transfer visualization */}
                  <div className="space-y-8">
                    {/* Spotify section */}
                    <motion.div
                      className="bg-card/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.4 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                      <div className="relative z-10">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-[#1DB954] rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                            <BsMusicNoteBeamed size={20} className="text-white" />
                          </div>
                          <div>
                            <span className="text-sm font-bold text-white block">My Playlist</span>
                            <span className="text-xs text-muted-foreground block">Spotify • 124 songs</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                              <div className="w-8 h-8 bg-white/10 rounded-md flex-shrink-0 animate-pulse" />
                              <div className="flex-1 space-y-1.5">
                                <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                                <div className="h-1.5 w-1/2 bg-white/10 rounded-full" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Transfer arrow */}
                    <motion.div
                      className="flex justify-center -my-2 relative z-20"
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ delay: 2, duration: 2, repeat: Infinity }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg border-4 border-card">
                        <BsArrowRight size={20} className="text-white" />
                      </div>
                    </motion.div>

                    {/* YouTube Music section */}
                    <motion.div
                      className="bg-card/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.8 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-50" />
                      <div className="relative z-10">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center shadow-lg shadow-secondary/20">
                            <BsPlay size={20} className="text-white" />
                          </div>
                          <div>
                            <span className="text-sm font-bold text-white block">Transferred ✓</span>
                            <span className="text-xs text-muted-foreground block">YouTube Music</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center space-x-3 p-2 rounded-lg bg-white/5 border border-white/5">
                              <div className="w-8 h-8 bg-secondary/20 rounded-md flex-shrink-0 flex items-center justify-center">
                                <BsMusicNoteBeamed size={12} className="text-secondary" />
                              </div>
                              <div className="flex-1 space-y-1.5">
                                <div className="h-2 w-2/3 bg-white/20 rounded-full" />
                                <div className="h-1.5 w-1/2 bg-white/10 rounded-full" />
                              </div>
                              <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                              </div>
                            </div>
                          ))}
                        </div>
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