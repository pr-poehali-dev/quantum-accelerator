export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://sun9-35.userapi.com/s/v1/ig2/KP2DWNSuXEs-mNG-3iv35ZvTm1wtIcKPfYpq1Moa79N6TrHy3SEVrK3HTCQrUsfbualcxtGsFjXrbIfoyEp1ueE1.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1920x0"
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