import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

export default function Menu() {
  return (
    <nav className='bg-greenHouseBg py-2 flex justify-around items-center font-greenHouseFt'>
      <div className='max-w-5xl mx-auto py-3 sm:px-6 lg:px-8 text-left'>
        <NavLink to={ '/' }><img src={ logo } alt="Logo tipo folha verde." /></NavLink>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-5 lg:px-7 text-right'>
        <NavLink to={'/como-fazer'}>Como fazer /</NavLink>
        <NavLink to={'/ofertas'}> Ofertas /</NavLink>
        <NavLink to={'/depoimentos'}> Depoimentos /</NavLink>
        <NavLink to={'/videos'}> Vídeos /</NavLink>
        <NavLink to={'/meu-carrinho'}> Meu Carrinho</NavLink>
      </div>
    </nav>
  );
}