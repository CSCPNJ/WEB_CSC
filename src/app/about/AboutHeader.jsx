import { Nunito, Comfortaa } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })
const comfortaa = Comfortaa({ subsets: ['latin'] })

const Header = () => {
  return (
    <div className="wrapper text-white py-5">
      <h1 className={"text-7xl pb-3 font-extrabold " + comfortaa.className}>About us</h1>
      <div className={'pt-3 pb-7 text-xl font-bold ' + nunito.className}>
        Temukan informasi lengkap mengenai Computer Student Club
      </div>
    </div>
  );
};

export default Header;
