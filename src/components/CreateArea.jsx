import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Input from '@material-ui/core/Input';
function CreateArea(props) {
  const [isexpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: '',
    content: '',
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  }
  function expand() {
    setExpanded(true);
  }
  return (
    <div>
      <form>
        {isexpanded && (
          <Input
            onChange={handleChange}
            name='title'
            value={note.title}
            placeholder='Title'
            inputProps={{ 'aria-label': 'description' }}
          />
        )}

        <textarea
          onClick={expand}
          onChange={handleChange}
          name='content'
          placeholder='Take a note...'
          rows={isexpanded ? 3 : 1}
          value={note.content}
        />
        <Fab onClick={submitNote} color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
