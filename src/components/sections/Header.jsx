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
    <header className="bg-premium-pink text-white sticky top-0 z-50 overflow-hidden">
      <div className="container">
        <div className="flex items-center justify-between gap-6 py-5">
          {/* Logo */}
          <a 
            href="/" 
            className="text-h4 font-black tracking-tight focus:outline-none focus:ring-2 focus:ring-white ring-offset-2 ring-offset-premium-pink"
            aria-label="Goodlyfe - Вернуться на главную"
          >
            Goodlyfe
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-8 text-link font-semibold md:flex" role="navigation" aria-label="Основная навигация">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors hover:text-pink-hover focus:outline-none focus:ring-2 focus:ring-white ring-offset-2 ring-offset-premium-pink"
              >
                {item}
              </a>
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
          <div className={`items-center gap-4 md:hidden ${isMobileMenuOpen ? 'hidden' : 'flex'}`}>
            <SearchButton />
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
            <a
              key={item}
              href="#"
              className="py-3 text-h5 font-semibold transition-colors hover:text-pink-hover focus:outline-none focus:ring-2 focus:ring-white ring-offset-2 ring-offset-premium-pink"
              onClick={closeMobileMenu}
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col gap-3 border-t border-white/20 pt-4">
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
    className="flex items-center gap-1 text-link font-semibold transition-colors hover:text-pink-hover focus:outline-none focus:ring-2 focus:ring-white ring-offset-2 ring-offset-premium-pink"
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
