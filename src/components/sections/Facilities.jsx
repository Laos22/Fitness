const Facilities = () => {
  const facilities = [
    { id: 1, name: 'Современное оборудование', description: 'Новейшие технологии' },
    { id: 2, name: 'Квалифицированный персонал', description: 'Опытные специалисты' },
    { id: 3, name: 'Круглосуточная поддержка', description: 'Мы всегда на связи' },
    { id: 4, name: 'Удобное расположение', description: 'Легко добраться' }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Наши возможности
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {facilities.map((facility) => (
            <div key={facility.id} className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{facility.name}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facilities
