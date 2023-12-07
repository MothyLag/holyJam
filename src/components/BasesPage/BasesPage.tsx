const BasesPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <div className="flex flex-col items-center gap-2">
        <img src="/Logo2.svg" className="w-3/4 md:w-1/5" alt="" />
        <br />
        <h1 className="text-moon-40 font-bold">Como participar?</h1>
        <a href="https://discord.gg/ZwEBbUTz" className="w-4/5 md:w-1/4">
          <img src="/Steps.png" alt="Pasos" />
        </a>
        <h1 className="text-moon-32 font-bold">Qué es la Holy Jam?</h1>
        <p className="text-moon-24 w-4/5 md:w-1/2">
          Es una game jam de santa secreto en la que tienes la oportunidad de
          pedirle a alguien más el juego que siempre quisiste! Escribe tu
          nombre, una temática y será enviada a tu santa secreto, también podrás
          actuar como jack frost y mandar una restricción a otra persona.
        </p>
        <a href="" className="w-4/5 md:w-1/4">
          <img src="/Steps2.png" alt="Pasos" />
        </a>
      </div>
    </div>
  );
};

export default BasesPage;
