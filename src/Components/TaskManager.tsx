function TaskManager (): JSX.Element {
  return (
        <form>
            <input type="text" name="entrada" id="enrada" placeholder="Ingrese una tarea nueva" />
            <input type="text" name="Buscador" id="Buscador" placeholder="Buscar Tarea" />
            <input type="submit" value="Aceptar" />
            <p>Filtro</p>
            <div>
              <p>Completada</p>
              <p>No Completada</p>
            </div>
        </form>
  )
}

export default TaskManager
