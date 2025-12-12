import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { BsList, BsX, BsMusicNoteBeamed } from "react-icons/bs"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-secondary rounded-xl flex items-center justify-center neon-glow">
                <BsMusicNoteBeamed size={20} className="text-primary-foreground" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-xl blur-sm opacity-50 -z-10"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Playlist Bridge
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Features', id: 'features' },
              { label: 'Screenshots', id: 'screenshots' },
              { label: 'How it works', id: 'how-it-works' },
              { label: 'Download', id: 'download' }
            ].map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="relative text-muted-foreground hover:text-foreground transition-colors group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"
                  layoutId="navbar-underline"
                />
              </motion.button>
            ))}
            {/* ThemeToggle removed */}
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-9 w-9 hover:bg-primary/20"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <BsX size={18} /> : <BsList size={18} />}
              </motion.div>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { label: 'Features', id: 'features' },
                  { label: 'Screenshots', id: 'screenshots' },
                  { label: 'How it works', id: 'how-it-works' },
                  { label: 'Download', id: 'download' }
                ].map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}