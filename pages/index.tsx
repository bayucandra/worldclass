import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/layout/UserLayout'
import UserLayout from '@/layout/UserLayout'
import HomeHeader from '@/components/HomePage/HomeHeader'
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  weight: '400',
  subsets: ['cyrillic'],
  display: 'swap'
})

export default function Home() {
  return (
<UserLayout title={'Home Page'}>
  <HomeHeader />
  <div className='text-[48px]'>
  <h1 className='font-raleway' >isi content WAYANG BESAR</h1>
  </div>
  <div className='text-[48px]'>
  <h1>isi content WAYANG BESAR</h1>
  </div>
</UserLayout>
   
  )
}
