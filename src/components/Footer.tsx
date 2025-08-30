import { motion } from 'framer-motion'
import { TwitterLogo, InstagramLogo, FacebookLogo, GithubLogo, MusicNotes, Heart, Envelope } from "@phosphor-icons/react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-muted" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-accent/5 to-secondary/5" />
      
      {/* Background effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl flex items-center justify-center">
                  <MusicNotes size={24} className="text-white" weight="bold" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl blur-lg opacity-50 -z-10" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Playlist Bridge
              </span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-md leading-relaxed mb-6"
            >
              The easiest way to transfer your playlists between Spotify and YouTube Music. 
              Keep your music collection synchronized across all platforms with style and security.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-sm text-muted-foreground"
            >
              <Heart size={16} className="text-accent" weight="fill" />
              <span>Made with love for music enthusiasts</span>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-card-foreground mb-6 text-lg">Legal</h3>
            <ul className="space-y-4">
              {[
                { text: "Privacy Policy", href: "#" },
                { text: "Terms of Service", href: "#" },
                { text: "Cookie Policy", href: "#" },
                { text: "Data Security", href: "#" }
              ].map((item, index) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={item.href} 
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-card-foreground mb-6 text-lg">Support</h3>
            <ul className="space-y-4">
              {[
                { text: "Help Center", href: "#" },
                { text: "Contact Us", href: "#" },
                { text: "FAQ", href: "#" },
                { text: "Status Page", href: "#" }
              ].map((item, index) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={item.href} 
                    className="text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border/50 mt-12 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-muted-foreground text-sm">
                © 2024 Playlist Bridge. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Envelope size={14} />
                <span>hello@playlistbridge.com</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {[
                { Icon: TwitterLogo, href: "#", label: "Twitter" },
                { Icon: InstagramLogo, href: "#", label: "Instagram" },
                { Icon: FacebookLogo, href: "#", label: "Facebook" },
                { Icon: GithubLogo, href: "#", label: "GitHub" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={social.label}
                >
                  <social.Icon size={18} className="group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 backdrop-blur-sm border border-border/30">
            <h3 className="text-xl font-bold text-card-foreground mb-4">Stay in the Loop</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Get updates on new features, platform support, and exclusive music tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
              <motion.button
                className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}