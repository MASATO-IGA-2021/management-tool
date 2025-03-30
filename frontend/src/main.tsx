import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from './components/ui/provider.tsx'
import './index.css'
import CreateProjects from './screens/createProjects.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <div>
        <CreateProjects />
        <App />
      </div>
    </Provider>
  </StrictMode>,
)
