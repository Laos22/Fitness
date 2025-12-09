const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">О компании</h3>
            <p className="text-gray-400">
              Мы создаём лучшие решения для вашего бизнеса
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Разработка</a></li>
              <li><a href="#" className="hover:text-white">Дизайн</a></li>
              <li><a href="#" className="hover:text-white">Консалтинг</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@example.com</li>
              <li>Телефон: +7 (999) 123-45-67</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white text-2xl">📘</a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">📷</a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">🐦</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Все права защищены</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
