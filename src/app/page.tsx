import Image from 'next/image'
import Head from 'next/head'
import Pareint from '../../components/Pareint'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          POS System
          <link rel='icob' href='favicon.ico' />
        </title>
      </Head>
      <Pareint>
        <div className='flex text-white font-bold'>
        <div className='p-10 bg-slate-900 rounded-x1'>
          <h1 className='text-3xl'>Total Sold</h1>
          <h1 className='text-2xl'>$123456</h1>
        </div>
        </div>
      </Pareint>
    </div>
  )
}
