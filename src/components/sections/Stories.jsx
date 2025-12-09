const Stories = () => {
  const stories = [
    {
      id: 1,
      author: 'Иван Петров',
      text: 'Отличный сервис! Всё быстро и качественно.',
      rating: 5
    },
    {
      id: 2,
      author: 'Мария Сидорова',
      text: 'Очень довольна результатом. Рекомендую!',
      rating: 5
    },
    {
      id: 3,
      author: 'Алексей Иванов',
      text: 'Профессиональный подход к делу.',
      rating: 4
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Отзывы клиентов
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{story.text}"</p>
              <p className="font-semibold">— {story.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stories
