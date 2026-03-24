export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://sun9-52.userapi.com/s/v1/ig2/DPAdZrXtFpGk125dvysWBMYZ67NzD21H-NYgsQorm6N4viLbieeFoFBUH1CpJo1wBZl6cDkCkl_2jOnqvlHqUSJf.jpg?quality=95&as=32x21,48x32,72x48,108x72,160x107,240x160,360x240,480x320,540x360,640x426,720x480,1080x720,1280x853,1440x960,2560x1706&from=bu&cs=2560x0"
          alt="Туристы в путешествии"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Более 500 маршрутов по 60 странам мира. Мы создаём путешествия, которые меняют взгляд на жизнь — от экзотических островов до горных экспедиций.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Все направления
        </button>
      </div>
    </div>
  );
}