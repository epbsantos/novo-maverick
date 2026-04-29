import Menu from "./components/Menu"
import text from "./constants/text"

function App() {
  

  return (
    <>
      <Menu></Menu>
      
      <h1>{text.title}</h1>
      <h2>{text.subtitle}</h2>
    </>
  )
}

export default App
