import email from '../assets/images/email.svg';
import heroImg from '../assets/images/heroImg.svg'

export default function NewsSubscription() {
  return (
    <div className='flex'>
      <article className='bg-greenHouseBg w-1/2 px-5 py-5 font-greenHouseFt'>
        <section className='py-2.5'>
          <p className='text-1xl'>Sua casa com as</p>
        </section>
        <section className='py-2.5'>
          <h1 className='text-9xl py-2'>melhores plantas</h1>
        </section>
        <section className='py-2.5'>
          <p className='py-2 text-1xl'>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
        </section>
        <section className='flex py-2.5'>
          <img
            src={email}
            alt="ícone de envelope de e-mail"
            className='mx-2' />
          <input
            type="email"
            className='border-0 rounded px-4 mx-2 w-1/3'
            name="newsletter-email"
            id="newsletter-email"
            placeholder="Insira seu e-mail" />
          <button className='font-greenHouseFt bg-greenHouseBtn px-3 py-4 rounded'>Assinar newsletter</button>
        </section>
      </article>
      <article className='bg-greenHouseBg w-1/2 px-5 py-5 font-greenHouseFt'>
          <section>
            <img src={ heroImg } alt="" />
          </section>
      </article>
    </div>
  );
}