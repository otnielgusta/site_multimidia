import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Titulo from '../components/titulo'
import Spacer from '../components/spacer'
import Subtitulo from '../components/subtitulo'
import DuasColunas from '../components/duas_colunas'
import Video from '../components/video'
import Linguagens from '../components/linguagens'
import Header from '../components/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Titulo
        titulo_menor={false}
        titulo="Programação Mobile Android"
        subtitulo="Otniel Silva Santos"
        itens={[
          "Sistemas de Informação",
          "IFMG - SJE"
        ]}

      />
    </div>
  )
}
