import SeoContact from '@/components/SeoContact'
import React,{ Suspense } from 'react'

export const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>

      <SeoContact />
    </Suspense>
    </div>
  )
}
