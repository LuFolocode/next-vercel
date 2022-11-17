
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <h1>Home page</h1>

      <h1 className={'title'}>
        {/*Ir al <a href="/about">About</a>*/}
        Ir a <Link href="/about">About</Link>
      </h1>
    </MainLayout>
  )
}
