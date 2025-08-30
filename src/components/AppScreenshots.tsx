import { useState, useEffect } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Play, Pause, DeviceMobile, Sparkle, MusicNotes } from "@phosphor-icons/react"

// Mock screenshot data - in a real app, these would be actual screenshots
const screenshots = [
  {
    id: 1,
    title: "Connect Your Accounts",
    description: "Securely link both Spotify and YouTube Music with OAuth authentication",
    image: "/api/placeholder/300/600", // Using placeholder for demo
    accent: "primary",
    accentClass: "from-primary to-primary/70",
    bgClass: "from-primary/20 via-primary/10 to-background",
    dotClass: "bg-primary",
    features: ["OAuth 2.0 Security", "One-tap connection", "Auto-sync enabled"]
  },
  {
    id: 2,
    title: "Browse Your Playlists", 
    description: "View all your playlists in a beautiful, organized interface",
    image: "/api/placeholder/300/600",
    accent: "accent",
    accentClass: "from-accent to-accent/70",
    bgClass: "from-accent/20 via-accent/10 to-background",
    dotClass: "bg-accent",
    features: ["Smart categorization", "Search & filter", "Recently played"]
  },
  {
    id: 3,
    title: "Select & Transfer",
    description: "Choose any playlist and transfer it with advanced song matching",
    image: "/api/placeholder/300/600",
    accent: "secondary",
    accentClass: "from-secondary to-secondary/70",
    bgClass: "from-secondary/20 via-secondary/10 to-background",
    dotClass: "bg-secondary",
    features: ["Bulk transfer", "Smart matching", "Progress tracking"]
  },
  {
    id: 4,
    title: "Transfer Complete",
    description: "Your playlist is now available on your destination platform",
    image: "/api/placeholder/300/600",
    accent: "primary",
    accentClass: "from-primary to-primary/70",
    bgClass: "from-primary/20 via-primary/10 to-background",
    dotClass: "bg-primary",
    features: ["Instant sync", "Match reports", "Backup options"]
  },
  {
    id: 5,
    title: "Manage & Sync",
    description: "Keep your playlists in sync across platforms automatically",
    image: "/api/placeholder/300/600",
    accent: "accent",
    accentClass: "from-accent to-accent/70",
    bgClass: "from-accent/20 via-accent/10 to-background",
    dotClass: "bg-accent",
    features: ["Auto-sync", "Version control", "Conflict resolution"]
  }
]

export function AppScreenshots() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume autoplay after 8 seconds
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50
    
    if (info.offset.x > swipeThreshold) {
      prevSlide()
    } else if (info.offset.x < -swipeThreshold) {
      nextSlide()
    }
  }

  return (
    <section id="screenshots" className="py-24 relative overflow-hidden">
      {/* Background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/10 to-secondary/5" />
      
      {/* Floating music notes */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <MusicNotes size={14} className="text-primary/20" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block p-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-2xl mb-6"
          >
            <DeviceMobile size={40} className="text-primary" weight="bold" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              App Screenshots
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the beautiful interface that makes playlist transfer feel magical. Every detail crafted for simplicity.
          </p>
        </motion.div>

        {/* Main Slider Container */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Screenshots Carousel */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              
              {/* Phone mockup container */}
              <div className="relative max-w-sm mx-auto">
                
                {/* Phone frame */}
                <div className="relative bg-gradient-to-br from-card via-card/80 to-muted/50 rounded-[3rem] p-3 shadow-2xl border border-border/50">
                  <div className="bg-background rounded-[2.5rem] overflow-hidden relative">
                    
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-card rounded-b-2xl z-20" />
                    
                    {/* Screenshot container with aspect ratio */}
                    <div className="aspect-[9/19.5] relative overflow-hidden">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentIndex}
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 cursor-grab active:cursor-grabbing"
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={0.1}
                          onDragEnd={handleDragEnd}
                        >
                          {/* Gradient placeholder for screenshot */}
                          <div className={`w-full h-full bg-gradient-to-br ${screenshots[currentIndex].bgClass} flex items-center justify-center relative`}>
                            <div className="text-center space-y-4 p-8">
                              <div className={`w-16 h-16 bg-gradient-to-br ${screenshots[currentIndex].accentClass} rounded-2xl mx-auto flex items-center justify-center`}>
                                <DeviceMobile size={32} className="text-white" weight="bold" />
                              </div>
                              <div className="space-y-2">
                                <div className={`h-3 ${screenshots[currentIndex].dotClass}/30 rounded-full`} />
                                <div className={`h-3 ${screenshots[currentIndex].dotClass}/20 rounded-full w-3/4 mx-auto`} />
                                <div className={`h-3 ${screenshots[currentIndex].dotClass}/15 rounded-full w-1/2 mx-auto`} />
                              </div>
                            </div>
                            
                            {/* Animated elements */}
                            <motion.div
                              className="absolute inset-0 pointer-events-none"
                              animate={{
                                background: [
                                  `radial-gradient(circle at 20% 20%, oklch(0.75 0.25 145 / 0.1) 0%, transparent 50%)`,
                                  `radial-gradient(circle at 80% 80%, oklch(0.8 0.3 320 / 0.1) 0%, transparent 50%)`,
                                  `radial-gradient(circle at 20% 20%, oklch(0.75 0.25 145 / 0.1) 0%, transparent 50%)`
                                ]
                              }}
                              transition={{ duration: 4, repeat: Infinity }}
                            />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                  
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-[3rem] blur-xl opacity-50 -z-10" />
                </div>

                {/* Navigation arrows */}
                <motion.button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-border/50 hover:bg-primary/20 transition-all duration-300 z-30"
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowLeft size={20} className="text-foreground" />
                </motion.button>

                <motion.button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-border/50 hover:bg-primary/20 transition-all duration-300 z-30"
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight size={20} className="text-foreground" />
                </motion.button>
              </div>

              {/* Slide indicators */}
              <div className="flex justify-center space-x-3 mt-8">
                {screenshots.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Content Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <motion.div
                          className={`w-12 h-12 bg-gradient-to-br ${screenshots[currentIndex].accentClass} rounded-xl flex items-center justify-center`}
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        >
                          <Sparkle size={24} className="text-white" weight="bold" />
                        </motion.div>
                        
                        <Button
                          onClick={toggleAutoPlay}
                          variant="ghost"
                          size="icon"
                          className="h-9 w-9 hover:bg-primary/20"
                        >
                          {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                        </Button>
                      </div>

                      <h3 className="text-2xl font-bold text-card-foreground mb-4">
                        {screenshots[currentIndex].title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {screenshots[currentIndex].description}
                      </p>

                      <div className="space-y-3">
                        {screenshots[currentIndex].features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                            className="flex items-center space-x-3"
                          >
                            <div className={`w-2 h-2 ${screenshots[currentIndex].dotClass} rounded-full`} />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Screen {currentIndex + 1} of {screenshots.length}</span>
                  <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-1 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${screenshots[currentIndex].accentClass}`}
                    initial={{ width: '0%' }}
                    animate={{ width: `${((currentIndex + 1) / screenshots.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}