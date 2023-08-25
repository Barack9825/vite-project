import './App.css'
import TaskManager from './Components/TaskManager'
import TaskList from './Components/TaskList'

function App (): JSX.Element {
  return (
    <>
    <h1 id="title" className='col-3 row-3'>Tareas por hacer</h1>
    <TaskManager/>
    <TaskList />
    </>
  )
}

export default App
