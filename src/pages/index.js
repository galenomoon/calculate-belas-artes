import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [N1, setN1] = useState(0)
  const [N2, setN2] = useState(0)
  const [final, setFinal] = useState(0)

  useEffect(() => {
    calculateResult()
  }, [N1, N2])

  function calculateResult() {

    const result = ((N1 * 2) + (N2 * 3)) / 5
    setFinal(result)
  }
  return (
    <main className='flex flex-col items-center justify-center h-screen bg-[#FDCEDF]'>
      <Head>
        <title>Calculadora de Notas</title>
        <meta name="description" content="Calculadora de Notas" />
      </Head>
      <div className='flex gap-2'>
        <input
          value={N1}
          type='number'
          className='border-[3px] outline-none border-[#E8A0BF] w-[100px] p-2 text-center bg-[#F8E8EE] rounded-full text-2xl'
          onChange={(e) => setN1(parseInt(e.target.value))}
        />
        <input
          value={N2}
          type='number'
          className='border-[3px] outline-none border-[#E8A0BF] w-[100px] p-2 text-center bg-[#F8E8EE] rounded-full text-2xl'
          onChange={(e) => setN2(parseInt(e.target.value))}
        />
      </div>
      <p className='mt-6 text-6xl'>
        Nota Final {final}
      </p>
    </main>
  )
}
