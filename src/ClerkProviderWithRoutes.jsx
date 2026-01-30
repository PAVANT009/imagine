import { ClerkProvider } from '@clerk/react-router'
import { useNavigate } from 'react-router-dom'

export default function ClerkProviderWithRoutes({ children, publishableKey }) {
  const navigate = useNavigate()
  
  return (
    <ClerkProvider 
      publishableKey={publishableKey}
      navigate={(to) => navigate(to)}
    >
      {children}
    </ClerkProvider>
  )
}