import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import CKEpage from './pages/CKEditor'
import QuillPage from './pages/Quill'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cke' element={<CKEpage />} />
          <Route path='/quill' element={<QuillPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
