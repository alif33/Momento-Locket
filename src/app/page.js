import Image from 'next/image'
import Faq from '@/components/home/Faq'
import OrderToday from '@/components/home/OrderToday'
import Reviews from '@/components/home/Reviews'
import Work from '@/components/home/Work'
import Products from '@/components/home/Products'
import Hero from '@/components/home/Hero'
import Pearl from '@/components/home/Pearl'
import PearlGates from '@/components/home/PearlGates'
import Technology from '@/components/home/Technology'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Pearl/>
      <Work/>
      <Technology/>
      <OrderToday/>
      <PearlGates/>
      <Products/>
      <Reviews/>
      <Faq/>
    </div>
  )
}
