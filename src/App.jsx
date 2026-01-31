import { RouterProvider, createBrowserRouter } from 'react-router'


import RootLayout from './layout/root-layout'
import AuthLayout from './layout/auth-layout'

import Login from './pages/login'
import Register from './pages/register'
import Profile from './pages/profile'
import NotFound from './pages/notfound'
import Home from './pages/home'
import About from '@/pages/about'
import Provider from '@/components/provider'



const routes = [
  {
    path: "/",
    element: <RootLayout/>,
    children: [
        {
          index: true,
          element: <Provider>
                      <Home/>
                  </Provider> 
        },
        {
          path: "auth",
          element: <AuthLayout/>,
          children: [
            {
              path:"login",
              element: <Login/>
            },
            {
              path: "register",
              element: <Register/>,
              children:[
                {
                  path: "*"
                }
              ]
            },
          ]
        },
        {
          path: "profile",
          element: <Provider>
            <Profile />
          </Provider>,
          children: [
            {
              path: "security"
            }
          ]
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"*",
          element:<NotFound/>
        }
    ]
  }
];


const router = createBrowserRouter(routes);


function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App