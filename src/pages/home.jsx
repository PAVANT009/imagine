// import GenerateImage from '@/components/generate-image'
// import { ScrollArea } from '@/components/ui/scroll-area'
// import React from 'react'

// export default function Home() {
//   return (
//     <main className="h-screen w-full">
//       <ScrollArea className="h-full w-full">
//         <div className="h- w-full flex flex-col items-center py-10">
//           <GenerateImage />
//         </div>
//       </ScrollArea>
//     </main>
//   )
// }

import GenerateImage from '@/components/generate-image'
import React from 'react'

export default function Home() {
  return (
    <main className='h-full w-full flex flex-col items-center py-10 overflow-visible'>
      <GenerateImage/>
    </main>
  )
}


{/* <main className="min-h-screen w-full flex flex-col items-center py-10 overflow-y-auto overflow-x-hidden"> */}
