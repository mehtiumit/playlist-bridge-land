import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { ArrowsLeftRight, Shield, Zap, MusicNotes } from "@phosphor-icons/react"

const features = [
  {
    icon: Zap,
    title: "One-click Transfer",
    description: "Transfer your entire playlist with just one tap. No manual searching or adding songs one by one."
  },
  {
    icon: ArrowsLeftRight,
    title: "Cross-platform Support",
    description: "Seamlessly move playlists between Spotify and YouTube Music in both directions."
  },
  {
    icon: MusicNotes,
    title: "Smart Sync",
    description: "Advanced matching algorithm finds the best version of each song on the destination platform."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is encrypted and never stored. We only access what's needed for the transfer."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your music across platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover bg-card border-border h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}