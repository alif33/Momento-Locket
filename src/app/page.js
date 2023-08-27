import Image from 'next/image'
import Faq from '@/components/home/Faq'
import OrderToday from '@/components/home/OrderToday'
import Reviews from '@/components/home/Reviews'
import Work from '@/components/home/Work'
import Products from '@/components/home/Products'
import Hero from '@/components/home/Hero'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Work/>
      <OrderToday/>
      <Reviews/>
      <Products/>
      <Faq/>
    </div>
  )
}
