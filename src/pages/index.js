import Head from 'next/head'
import { BsGithub } from 'react-icons/bs'
import ConfettiExplosion from 'react-confetti-explosion';

import { useEffect, useState } from 'react'

export default function Home() {
  const max_value = 30
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
    <main className='flex flex-col items-center justify-center h-screen text-[#684c76] [#FEF1E8] text-center'>
      {final >= 9 && <ConfettiExplosion />}
      <Head>
        <title>Calculadora de Notas da Belas Artes - O salva vidas do aluno da BA</title>
        <meta name="description" content="O salva vidas do aluno da BA (Agradecer a Lua Santiago (e o namoradinho dela))" />
        <meta property="og:title" content="Calculadora de Notas da Belas Artes - O salva vidas do aluno da BA" />
        <meta property="og:description" content="O salva vidas do aluno da BA (Agradecer a Lua Santiago (e o namoradinho dela))" />
        <meta property="og:image" content="https://instagram.fssz1-1.fna.fbcdn.net/v/t51.2885-15/310835708_424830326437851_2698129450005467494_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fssz1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Ngaee1hLt3IAX8flVxv&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCGd20Ej3p1M9-2WQfKLfL55IGyKpHUYAL0CP5dBzbPvw&oe=6490FEAC&_nc_sid=f70a57" />
      </Head>
      <p className='text-4xl font-medium mb-10'>
        Calculadora de Notas da <br /> Belas Artes 🎨
      </p>
      <a href='https://github.com/galenomoon/' target="_blank" className='flex gap-2 items-center justify-center absolute top-4 right-4'>
        <BsGithub size={30} />
        <p className='text-2xl underline'>
          github/galenomoon
        </p>
      </a>
      <div className='flex gap-9'>
        <div className='flex items-center gap-2 justify-center'>
          <p className='text-2xl'>
            N1:
          </p>
          <input
            value={N1}
            max={max_value}
            min={0}
            type='number'
            className='border-[3px] outline-none border-[#E8A0BF] w-[100px] p-2 text-center bg-[#fdfdfd]/90 rounded-full text-2xl'
            onChange={(e) => parseFloat(e.target.value) > max_value ? setN1(max_value) : setN1(parseFloat(e.target.value))}
          />
        </div>
        <div className='flex items-center gap-2 justify-center'>
          <p className='text-2xl'>
            N2:
          </p>
          <input
            value={N2}
            max={max_value}
            min={0}
            type='number'
            className='border-[3px] outline-none border-[#E8A0BF] w-[100px] p-2 text-center bg-[#fdfdfd]/90 rounded-full text-2xl'
            onChange={(e) => parseFloat(e.target.value) > max_value ? setN2(max_value) : setN2(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <p className='mt-6 text-6xl whitespace-nowrap'>
        Nota Final: {final || "00"}
      </p>
      <p className='text-xl font-medium mt-10'>
        Agradecimentos especiais <br /> a Lua Santiago e seu namoradinho {"<3"}
      </p>
    </main>
  )
}
