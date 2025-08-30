import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Star, CaretLeft, CaretRight, Heart, MusicNotes, Users } from "@phosphor-icons/react"

const testimonials = [
  {
    name: "Sarah Chen",
    handle: "@sarahmusic",
    avatar: "SC",
    rating: 5,
    text: "Finally! I can move my carefully curated playlists between platforms. Works flawlessly every time.",
    platform: "Spotify → YouTube Music",
    color: "from-primary to-accent"
  },
  {
    name: "Mike Rodriguez", 
    handle: "@mikebeats",
    avatar: "MR",
    rating: 5,
    text: "Saved me hours of manual work. The smart matching is incredibly accurate at finding the right songs.",
    platform: "YouTube Music → Spotify",
    color: "from-accent to-secondary"
  },
  {
    name: "Emma Thompson",
    handle: "@emmaplaylists", 
    avatar: "ET",
    rating: 5,
    text: "Love how secure it is. No weird permissions, just does exactly what it promises. Highly recommend!",
    platform: "Cross-platform Pro",
    color: "from-secondary to-primary"
  },
  {
    name: "David Kim",
    handle: "@davidvibes",
    avatar: "DK", 
    rating: 5,
    text: "Transferred 20+ playlists in minutes! The interface is so clean and the process is incredibly intuitive.",
    platform: "Spotify → YouTube Music",
    color: "from-primary to-accent"
  },
  {
    name: "Luna Martinez",
    handle: "@lunabeats",
    avatar: "LM",
    rating: 5, 
    text: "Best music app I've ever used. Finally found a way to keep my music organized across all platforms.",
    platform: "Multi-platform User",
    color: "from-accent to-secondary"
  }
]

const stats = [
  { value: "500K+", label: "Playlists Transferred", icon: MusicNotes, color: "text-primary" },
  { value: "4.9★", label: "App Store Rating", icon: Star, color: "text-accent" },
  { value: "50M+", label: "Songs Matched", icon: Heart, color: "text-secondary" },
  { value: "99.2%", label: "Success Rate", icon: Users, color: "text-primary" }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Floating hearts */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Heart size={12} className="text-accent/30" weight="fill" />
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
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block p-4 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl mb-6"
          >
            <Heart size={40} className="text-accent" weight="bold" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
              Loved by Music Fans
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join the community of music lovers who've discovered the magic of seamless playlist transfers
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <motion.div
                  className="mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <stat.icon size={32} className={`${stat.color} mx-auto`} weight="bold" />
                </motion.div>
                <motion.div 
                  className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
            >
              <CaretLeft size={20} className="text-white" weight="bold" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
            >
              <CaretRight size={20} className="text-white" weight="bold" />
            </button>

            {/* Carousel container */}
            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
                    <CardContent className="p-8 md:p-12">
                      <div className="text-center max-w-3xl mx-auto">
                        {/* Stars */}
                        <motion.div
                          className="flex items-center justify-center space-x-1 mb-6"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        >
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, rotate: -180 }}
                              animate={{ opacity: 1, rotate: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                            >
                              <Star size={24} className="text-accent fill-current" weight="fill" />
                            </motion.div>
                          ))}
                        </motion.div>
                        
                        {/* Quote */}
                        <motion.blockquote
                          className="text-xl md:text-2xl text-card-foreground mb-8 leading-relaxed font-medium"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          "{testimonials[currentIndex].text}"
                        </motion.blockquote>
                        
                        {/* User info */}
                        <motion.div
                          className="flex items-center justify-center space-x-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <div className={`w-16 h-16 bg-gradient-to-br ${testimonials[currentIndex].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                            <span className="text-white font-bold text-xl">
                              {testimonials[currentIndex].avatar}
                            </span>
                          </div>
                          <div className="text-left">
                            <div className="font-bold text-card-foreground text-lg">
                              {testimonials[currentIndex].name}
                            </div>
                            <div className="text-muted-foreground">
                              {testimonials[currentIndex].handle}
                            </div>
                            <div className="text-sm text-primary font-medium">
                              {testimonials[currentIndex].platform}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 backdrop-blur-sm border border-border/30">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Ready to Join Them?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the same seamless playlist transfers that have made thousands of users happy.
            </p>
            <motion.button
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Playlist Bridge Free
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}