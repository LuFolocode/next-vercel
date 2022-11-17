import Link from 'next/link';
import { DarkLayout } from '../components/layouts/DarkLayout';
import { MainLayout } from '../components/layouts/MainLayout';

export default function About() {
  return (
    <>
      <h1>About page</h1>
        <h1 className={'title'}>
          {/*Ir al <a href="/">Home</a>*/}
          Ir a <Link href="/">Home</Link>
        </h1>
       </>
  )
}

About.getLayout = function getLayout( page: JSX.Element ){
  return(
    <MainLayout>
      <DarkLayout>
      { page}
      </DarkLayout>
    </MainLayout>
  )
}
