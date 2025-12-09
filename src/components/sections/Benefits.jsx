const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: 'Быстро',
      description: 'Молниеносная скорость работы',
      icon: '⚡'
    },
    {
      id: 2,
      title: 'Надёжно',
      description: 'Проверенные технологии',
      icon: '🛡️'
    },
    {
      id: 3,
      title: 'Удобно',
      description: 'Интуитивный интерфейс',
      icon: '✨'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Наши преимущества
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
