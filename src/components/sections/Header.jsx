import Button from '../ui/Button'
import { useState } from 'react'

const navItems = ['Classes', 'Timetable', 'Clubs', 'Nutrition', 'Free Trial']

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-premium-pink text-white sticky top-0 z-50" role="banner">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5">
        {/* Logo */}
        <a 
          href="/" 
          className="text-h4 font-black tracking-tight focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          aria-label="Goodlyfe - Вернуться на главную"
        >
          Goodlyfe
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-8 text-link font-semibold md:flex" role="navigation" aria-label="Основная навигация">
          {navItems.map((item) => (
            <span key={item} className="cursor-pointer transition-colors hover:text-pink-hover focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:text-pink-hover" tabIndex="0">
              {item}
            </span>
          ))}
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <SearchButton />
          <Button variant="ghost" className="bg-white px-6 py-2 text-premium-pink hover:bg-pink-subtle">
            Login
          </Button>
        </div>

        {/* Mobile Actions - скрываются при открытом меню */}
        <div className={`flex items-center gap-4 md:hidden ${isMobileMenuOpen ? 'hidden' : 'flex'}`}>
          <button
            className="flex items-center gap-1 text-link font-semibold transition-colors hover:text-pink-hover focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            type="button"
            aria-label="Поиск"
          >
            <span>Search</span>
            <span aria-hidden className="text-lg">
              🔍
            </span>
          </button>
          <Button variant="ghost" className="bg-white px-4 py-2 text-premium-pink hover:bg-pink-subtle text-sm">
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center gap-2 p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMobileMenuOpen}
          type="button"
        >
          <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
          <div className="flex flex-col gap-1">
            <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        role="navigation"
        aria-label="Мобильное меню"
      >
        <nav className="flex flex-col gap-4 bg-premium-pink/95 p-6">
          {navItems.map((item) => (
            <span 
              key={item} 
              className="cursor-pointer py-3 text-h5 font-semibold transition-colors hover:text-pink-hover focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              onClick={closeMobileMenu}
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              {item}
            </span>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-white/20">
            <SearchButton />
            <Button 
              variant="ghost" 
              className="bg-white px-6 py-3 text-premium-pink hover:bg-pink-subtle w-full"
              onClick={closeMobileMenu}
            >
              Login
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

const SearchButton = () => (
  <button
    className="flex items-center gap-1 text-link font-semibold transition-colors hover:text-pink-hover focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
    type="button"
    aria-label="Поиск"
  >
    <span>Search</span>
    <span aria-hidden className="text-lg">
      🔍
    </span>
  </button>
)

export default Header
