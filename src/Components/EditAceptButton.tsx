function EditAceptButon ({ state, handleclick }: { state: boolean, handleclick: () => void }): JSX.Element {
  return (
    <button onClick={handleclick}>{state ? "editar" : "aceptar"}</button>
  )
}

export default EditAceptButon
