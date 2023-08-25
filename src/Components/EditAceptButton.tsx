import { AiFillEdit } from "react-icons/ai"
function EditAceptButon ({ state, handleclick }: { state: boolean, handleclick: () => void }): JSX.Element {
  return (
    <>{state ? <AiFillEdit className='icon col-1'onClick={handleclick}/> : <AiFillEdit className='icon col-1'onClick={handleclick}/> }</>
  )
}

export default EditAceptButon
