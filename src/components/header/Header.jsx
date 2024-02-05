import Link from 'next/link';

const Header = () => {
  return (
    <div className="wrapper text-white pb-40">
      <img src="/csc-logo.png" alt="CSC Logo" width={300} className='float-right mb-3' />
      <h1 className="text-6xl font-medium py-3">Computer Student Club</h1>
      <h2 className="text-blue-500 text-lg py-3">#Unlimited<span className='text-red-500'>Connection</span></h2>
      <div className='pb-5'>
        Kami adalah kelompok studi mahasiswa di bawah naungan jurusan TIK Politeknik Negeri Jakarta. Berfokus pada pengembangan minat dan bakat mahasiswa serta meningkatkan capaian prestasi mahasiswa.
      </div>
      <Link href='/join-us' className='border p-2 rounded-md font-bold'>Bergabung Bersama Kami</Link>
    </div>
  );
};

export default Header;
