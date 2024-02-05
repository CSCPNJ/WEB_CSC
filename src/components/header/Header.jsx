import Link from 'next/link';
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

const Header = () => {
  return (
    <div className="wrapper text-white pb-40">
      <img src="/csc-logo.png" alt="CSC Logo" width={300} className='float-right mb-3' />
      <h1 className="text-6xl pb-3 font-extrabold">Computer Student Club</h1>
      <h2 className="text-blue-500 text-2xl py-1">#Unlimited<span className='text-red-500'>Connection</span></h2>
      <div className={'pt-3 pb-7 text-xl ' + nunito.className}>
        Kami adalah kelompok studi mahasiswa di bawah naungan jurusan TIK Politeknik Negeri Jakarta. Berfokus pada pengembangan minat dan bakat mahasiswa serta meningkatkan capaian prestasi mahasiswa.
      </div>
      <Link href='/join-us' className={'border-2 p-2 rounded-md text-xl font-bold ' + nunito.className}>Bergabung Bersama Kami</Link>
    </div>
  );
};

export default Header;
