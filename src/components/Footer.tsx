export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Направления</h3>
                <a
                  href="#europe"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Европа
                </a>
                <a
                  href="#asia"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Азия
                </a>
                <a
                  href="#americas"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Америка
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Компания</h3>
                <a
                  href="#about"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  О нас
                </a>
                <a
                  href="#blog"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Блог
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Контакты
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <img
                src="https://sun9-50.userapi.com/s/v1/ig2/CSvPdTnbNq-L5olf-t0exIsvwxvm43_fuZEuDECs_3crZmLIrtYD-ijwCqws4BizpL-8TUZ-xcY3ktRojoT4Jfn4.jpg?quality=95&as=32x28,48x42,72x63,108x95,160x141,240x211,360x317,480x422,540x475,640x563,720x633,1080x950,1280x1126,1440x1266,2390x2102&from=bu&cs=2390x0"
                alt="Дикая Планета"
                className="h-24 sm:h-32 lg:h-40 w-auto object-contain mt-4 sm:mt-6 lg:mt-10"
              />
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} ООО Дикая Планета</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}