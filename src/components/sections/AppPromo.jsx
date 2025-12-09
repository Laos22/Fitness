import Button from '../ui/Button'

const AppPromo = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Скачайте наше приложение
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Доступно на iOS и Android. Управляйте всем из одного места!
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" size="lg">
            App Store
          </Button>
          <Button variant="secondary" size="lg">
            Google Play
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AppPromo
