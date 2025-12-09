import Button from '../ui/Button'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Добро пожаловать на наш сайт
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Создайте что-то удивительное вместе с нами
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Начать</Button>
          <Button variant="outline" size="lg" className="bg-white">
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
