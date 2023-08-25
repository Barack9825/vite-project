import '../StyleSheets/EntryTitleTask.css'
function EntryTitleTask ({ editing, title, handleChange }: { editing: boolean, title: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }): JSX.Element {
  if (editing) {
    return (
        <p className="title col-6 row-5">{title}</p>
    )
  } else {
    return (
        <input className="title col-6 row-5" type="text" name="Entry" id="Entry" placeholder={title} onChange={handleChange}/>
    )
  }
}

export default EntryTitleTask
