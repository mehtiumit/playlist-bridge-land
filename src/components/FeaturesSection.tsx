import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { BsArrowLeftRight, BsShield, BsLightning, BsMusicNoteBeamed, BsCloudUpload, BsClock, BsStars, BsLock } from "react-icons/bs"

const features = [
  {
    icon: BsLightning,
    title: "One-click Transfer",
    description: "Transfer your entire playlist with just one tap. No manual searching or adding songs one by one.",
    gradient: "from-primary to-accent",
    delay: 0
  },
  {
    icon: BsArrowLeftRight,
    title: "Cross-platform Support", 
    description: "Seamlessly move playlists between Spotify and YouTube Music in both directions.",
    gradient: "from-accent to-secondary",
    delay: 0.1
  },
  {
    icon: BsMusicNoteBeamed,
    title: "Smart Sync",
    description: "Advanced matching algorithm finds the best version of each song on the destination platform.",
    gradient: "from-secondary to-primary",
    delay: 0.2
  },
  {
    icon: BsShield,
    title: "Secure & Private",
    description: "Your data is encrypted and never stored. We only access what's needed for the transfer.",
    gradient: "from-primary via-accent to-secondary",
    delay: 0.3
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="absolute inset-0">
        {/* Floating orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full opacity-10"
            style={{
              background: `linear-gradient(45deg, oklch(0.75 0.25 145), oklch(0.8 0.3 320))`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
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
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block p-3 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl mb-6"
          >
            <BsStars size={32} className="text-primary" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to manage your music across platforms with style and efficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, rotateY: 30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="group relative bg-card/50 backdrop-blur-sm border-border/50 h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <CardContent className="relative p-8">
                  {/* Icon container with pulsing animation */}
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                    <feature.icon size={28} className="text-white relative z-10" />
                    
                    {/* Rotating glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: BsCloudUpload, text: "Instant Transfer", desc: "Real-time playlist sync" },
            { icon: BsClock, text: "Save Time", desc: "Transfer hundreds of songs in seconds" },
            { icon: BsLock, text: "Privacy First", desc: "Zero data retention policy" }
          ].map((item, index) => (
            <motion.div
              key={item.text}
              className="flex items-center space-x-4 p-6 bg-card/30 backdrop-blur-sm rounded-2xl border border-border/30 hover:bg-card/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <item.icon size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground">{item.text}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}