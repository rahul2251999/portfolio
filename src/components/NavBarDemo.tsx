import { Home, User, Briefcase, Code, Mail, Sparkles } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Experience', url: '#experience', icon: Briefcase },
    { name: 'Projects', url: '#projects', icon: Code },
    { name: 'Skills', url: '#skills', icon: Sparkles },
    { name: 'Contact', url: '#contact', icon: Mail }
  ]

  return <NavBar items={navItems} />
}
