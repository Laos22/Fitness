import { useState } from 'react'
import Button from '../ui/Button'

// ✅ Вариант для Vite/React: кладём картинки в src/assets и импортируем как модуль
// Положи файл сюда: src/assets/images/hero-1.jpg (или поправь путь ниже)
import heroBg from '../../assets/images/hero-1.jpg'

const Hero = () => {
  // пока просто имитация слайдера: активная точка
  const [activeDot, setActiveDot] = useState(2)
  const dots = [0, 1, 2, 3, 4]

  return (
    <section className="relative w-full overflow-hidden">
      {/* Фон-картинка */}
      <div
        className="absolute inset-0 bg-cover bg-[position:65%_center] md:bg-center md:bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />

      {/* Затемнение/оверлей, чтобы белый текст читался */}
      <div className="absolute inset-0 bg-black/35" aria-hidden />

      {/* Контент */}
      <div className="container relative">
        {/*
          Высота блока:
          - min-h задаёт минимальную высоту, а контент сам растягивается, если нужно
          - pt/pb регулируют вертикальную посадку (на макете заголовок чуть выше центра)
        */}
        <div className="flex min-h-[520px] flex-col items-center justify-center pb-16 pt-10 text-center md:min-h-[640px] md:pt-0 lg:min-h-[720px]">
          <h1 className="max-w-[16ch] text-h3 font-extrabold text-white md:text-h2 lg:text-h1">
            Welcome to
            <br />
            Goodlyfe Gyms
          </h1>

          <div className="mt-8">
            <Button className="px-10 py-4">See the benefits</Button>
          </div>

          {/* Точки слайдера: абсолютом снизу по центру */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3">
            {dots.map((i) => (
              <button
                key={i}
                type="button"
                aria-label={`Слайд ${i + 1}`}
                aria-current={i === activeDot ? 'true' : undefined}
                onClick={() => setActiveDot(i)}
                className={
                  i === activeDot
                    ? 'h-3 w-3 rounded-full bg-premium-pink'
                    : 'h-3 w-3 rounded-full bg-white/80 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white ring-offset-2 ring-offset-black/40'
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Белая волна/скругление снизу — позже добавим (svg/псевдоэлемент), пока оставим без неё */}
    </section>
  )
}

export default Hero