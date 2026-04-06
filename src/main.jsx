import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router/dom";

import { router } from './Routes/Routes';
import BkCxt from './BooksContext/BkCxt';





createRoot(document.getElementById('root')).render(
  <StrictMode>
   
     <BkCxt>
       <RouterProvider router={router} />
     </BkCxt>
  
  </StrictMode>,
)
