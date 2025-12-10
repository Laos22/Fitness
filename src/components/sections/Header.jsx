import Button from '../ui/Button'

const navItems = ['Classes', 'Timetable', 'Clubs', 'Nutrition', 'Free Trial']

const Header = () => {
  return (
    <header className="bg-premium-pink text-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <div className="text-h4 font-black tracking-tight">Goodlyfe</div>
        <nav className="hidden flex-1 items-center justify-center gap-8 text-link font-semibold md:flex">
          {navItems.map((item) => (
            <span key={item} className="cursor-pointer transition-colors hover:text-pink-hover">
              {item}
            </span>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-1 text-link font-semibold transition-colors hover:text-pink-hover"
            type="button"
          >
            <span>Search</span>
            <span aria-hidden className="text-lg">
              🔍
            </span>
          </button>
          <Button variant="ghost" className="bg-white px-6 py-2 text-premium-pink hover:bg-pink-subtle">
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
