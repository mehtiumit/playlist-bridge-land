import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "@phosphor-icons/react"

const testimonials = [
  {
    name: "Sarah Chen",
    handle: "@sarahmusic",
    avatar: "SC",
    rating: 5,
    text: "Finally! I can move my carefully curated playlists between platforms. Works flawlessly every time."
  },
  {
    name: "Mike Rodriguez",
    handle: "@mikebeats",
    avatar: "MR",
    rating: 5,
    text: "Saved me hours of manual work. The smart matching is incredibly accurate at finding the right songs."
  },
  {
    name: "Emma Thompson",
    handle: "@emmaplaylists",
    avatar: "ET",
    rating: 5,
    text: "Love how secure it is. No weird permissions, just does exactly what it promises. Highly recommend!"
  }
]

const stats = [
  { value: "500K+", label: "Playlists Transferred" },
  { value: "4.9★", label: "App Store Rating" },
  { value: "50M+", label: "Songs Matched" },
  { value: "99.2%", label: "Success Rate" }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Loved by Music Fans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users who've successfully transferred their playlists
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover bg-card border-border h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-accent fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-card-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {testimonial.handle}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}