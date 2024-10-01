import SeoContact from '@/components/SeoContact'
import React,{ Suspense } from 'react'

export default function SeoContactPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>

      <SeoContact />
    </Suspense>
    </div>
  )
}
