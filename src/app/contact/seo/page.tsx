"use client";

import SeoContact from '@/components/SeoContact'
import React, { Suspense } from 'react'

export default function SeoContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SeoContact />
    </Suspense>
  )
}