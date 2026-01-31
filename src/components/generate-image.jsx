import { LayoutGridDemo } from '@/components/layout';
import { Button } from '@/components/ui/button'
import { LayoutGrid } from '@/components/ui/layout-grid'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function GenerateImage() {
  return (
    <section className="w-full min-h-screen bg-background flex flex-col items-center gap-6 py-8">
      
      <div className="text-center text-foreground text-xl font-semibold">
        Generate Image with AI
      </div>

      <div className="w-full flex flex-col items-center gap-4">
        <Textarea className="w-[70%] h-52 " />
        <Button>Generate</Button>
      </div>
        <LayoutGridDemo />
    </section>
  )
}
