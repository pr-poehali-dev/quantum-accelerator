interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <img
          src="https://sun9-50.userapi.com/s/v1/ig2/CSvPdTnbNq-L5olf-t0exIsvwxvm43_fuZEuDECs_3crZmLIrtYD-ijwCqws4BizpL-8TUZ-xcY3ktRojoT4Jfn4.jpg?quality=95&as=32x28,48x42,72x63,108x95,160x141,240x211,360x317,480x422,540x475,640x563,720x633,1080x950,1280x1126,1440x1266,2390x2102&from=bu&cs=2390x0"
          alt="Дикая Планета"
          className="h-10 w-auto object-contain"
        />
        <nav className="flex gap-8">
          <a
            href="#tours"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Туры
          </a>
          <a
            href="#contact"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
}