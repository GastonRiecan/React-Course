import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded md'>Vite whit Tailwind</h1>
      <Card username="Gaston" post="Staff Engg."/>
      <Card username="Hitesh"/>
      <Card username="Pepesito"/>
    </>
  )
}

export default App
