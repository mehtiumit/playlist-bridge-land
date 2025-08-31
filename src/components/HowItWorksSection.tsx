import { motion } from 'framer-motion'
import { BsSpotify, BsYoutube, BsArrowRight, BsMusicNoteBeamed, BsPlay, BsListUl, BsCheckCircle } from "react-icons/bs"

const steps = [
  {
    step: 1,
    title: "Connect Spotify",
    description: "Securely link your Spotify account with one tap",
    icon: BsSpotify,
    color: "from-primary to-primary/80",
    bgColor: "bg-primary/10",
    details: "OAuth 2.0 secure authentication"
  },
  {
    step: 2,
    title: "Choose Playlist",
    description: "Select any playlist from your library to transfer",
    icon: BsListUl,
    color: "from-accent to-accent/80",
    bgColor: "bg-accent/10", 
    details: "Browse all your playlists"
  },
  {
    step: 3,
    title: "Transfer Complete",
    description: "Watch your playlist appear instantly in YouTube Music",
    icon: BsYoutube,
    color: "from-secondary to-secondary/80",
    bgColor: "bg-secondary/10",
    details: "Smart song matching included"
  }
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
      
      {/* Animated music notes floating in background */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <BsMusicNoteBeamed size={16} className="text-primary/20" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block p-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-2xl mb-6"
          >
            <BsPlay size={40} className="text-primary" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transfer your playlists in three magical steps. It's so simple, you'll wonder why it wasn't always this easy.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                    <step.icon size={32} className="text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent mt-4 mx-auto" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-2">{step.description}</p>
                  <p className="text-sm text-primary font-medium">{step.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-8 relative">
            {/* Connection lines */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary opacity-30" />
            
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <motion.div
                  className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Step number with pulsing effect */}
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {step.step}
                  </motion.div>
                  
                  {/* Icon container */}
                  <motion.div 
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center relative overflow-hidden`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                    <step.icon size={40} className="text-white relative z-10" />
                    
                    {/* Rotating glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="bg-primary/10 rounded-xl p-3">
                    <p className="text-sm font-medium text-primary">{step.details}</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>

                {/* Animated arrows between steps */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute top-20 -right-8 z-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.3, duration: 0.6 }}
                    animate={{ x: [0, 10, 0] }}
                    // transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                      <BsArrowRight size={24} className="text-white" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 backdrop-blur-sm border border-border/30">
            <BsCheckCircle size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of music lovers who have already transferred millions of songs with Playlist Bridge.
            </p>
            <motion.button
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Transferring Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}