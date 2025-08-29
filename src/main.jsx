import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marketplace from './Routes/Marketplace.jsx'
import Video from './Routes/Video.jsx'
import Home from './Routes/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Games from './Routes/Games.jsx'
import Profile from './Routes/Profile.jsx'
import { Provider } from './Store/ContextStore.jsx'
import UploadBox from './Routes/UploadBox.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/marketplace',
        element:<Marketplace/>
      },
      {
        path:'/video',
        element:<Video/>
      },
      {
        path:'/games',
        element:<Games/>
      },
    ]
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/uploadbox',
    element:<UploadBox/>
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
