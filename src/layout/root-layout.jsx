import { AppSidebar } from "@/components/app-sidebar"
import Navbar from "@/components/navbar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Spinner } from "@/components/ui/spinner"
import { useUser } from "@clerk/clerk-react"
import { Outlet } from "react-router-dom"

// export default function RootLayout() {
//   return (
//     <SidebarProvider defaultOpen={true}>
//       <div className="flex flex-col h-screen w-full">
//         <Navbar />

//         <div className="flex flex-1 overflow-hidden">
//           <AppSidebar />

//           <main className="flex-1 overflow-auto p-4">
//             <SidebarTrigger className="mb-4" />
//             <Outlet />
//           </main>
//         </div>
//       </div>
//     </SidebarProvider>
//   )
// }
export default function RootLayout() {
  const { isSignedIn, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner 
          className={"size-4"}
        />
      </div>
    )
  }

  return (
    <div className="flex h-screen">
      <SidebarProvider>
        {isSignedIn && <AppSidebar />}

        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="h-[7%] w-full px-1.5 flex items-center justify-between border-b">
            {isSignedIn && <SidebarTrigger className="bg-gray-500" />}
            <Navbar />
          </header>

          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}
