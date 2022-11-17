
import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact page</h1>
        <h1 className={'title'}>
          {/*Ir al <a href="/">Home</a>*/}
          Ir a <Link href="/">Home</Link>
        </h1>
    </MainLayout>
  )
}