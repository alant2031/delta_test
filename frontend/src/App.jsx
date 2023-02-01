import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home, New, Student, Students, About, NotFound } from "./pages"

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/students" element={ <Students /> }/>
        <Route path="/students/:id" element={ <Student /> }/>
        <Route exact path="/students/new" element={ <New /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="*" element={ <NotFound /> }/>
      </Routes>
    </div>
  )
}

export default App
