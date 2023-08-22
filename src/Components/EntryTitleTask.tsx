function EntryTitleTask ({ editing, title, handleChange }: { editing: boolean, title: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }): JSX.Element {
  if (editing) {
    return (
        <p>{title}</p>
    )
  } else {
    return (
        <input type="text" name="Entry" id="Entry" placeholder={title} onChange={handleChange}/>
    )
  }
}

export default EntryTitleTask
