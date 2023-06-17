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
      <div className='flex gap-9'>
        <div className='flex items-center gap-2 justify-center'>
          <p>
            N1:
          </p>
          <input
            value={N1}
            type='number'
            className='border-[3px] outline-none border-[#E8A0BF] w-[100px] p-2 text-center bg-[#F8E8EE] rounded-full text-2xl'
            onChange={(e) => setN1(parseFloat(e.target.value))}
          />
        </div>
        <div className='flex items-center gap-2 justify-center'>
          <p>
            N2:
          </p>
          <input
            value={N2}
            type='number'
            className='border-[3px] outline-none border-[#E8A0BF] w-[100px] p-2 text-center bg-[#F8E8EE] rounded-full text-2xl'
            onChange={(e) => setN2(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <p className='mt-6 text-6xl'>
        Nota Final: {final || "00"}
      </p>
    </main>
  )
}
