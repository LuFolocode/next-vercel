import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';

export default function Pricing() {
  return (
    <MainLayout>
      <h1>Pricing page</h1>
        <h1 className={'title'}>
          {/*Ir al <a href="/">Home</a>*/}
          Ir a <Link href="/">Home</Link>
        </h1>
    </MainLayout>
  )
}