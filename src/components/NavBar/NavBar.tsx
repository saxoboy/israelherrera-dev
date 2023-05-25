import Logo from '@/components/Logo';

const NavBar = () => {
  return (
    <div className='container mx-auto flex items-center justify-between px-4 py-4'>
      <Logo />
      <div>
        <nav>
          <ul className='flex items-center justify-end text-center font-display tracking-wide'>
            <li className='px-4 py-2 hover:bg-tertiary-default'>Inicio</li>
            <li className='px-4 py-2 hover:bg-tertiary-default'>Nosotros</li>
            <li className='px-4 py-2 hover:bg-tertiary-default'>
              Oferta Academicas
            </li>
            <li className='px-4 py-2 hover:bg-tertiary-default'>
              Educacion Continua
            </li>
            <li className='px-4 py-2 hover:bg-tertiary-default'>
              Procesos Academicos
            </li>
            <li className='px-4 py-2 hover:bg-tertiary-default'>Noticias</li>
            <li className='px-4 py-2 hover:bg-tertiary-default'>
              Campus Virtual
            </li>
            <li className='px-4 py-2 hover:bg-tertiary-default'>
              Iniciar Sesion
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
