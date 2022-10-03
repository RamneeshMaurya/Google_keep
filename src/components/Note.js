import { MdDeleteForever } from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';
import EditNote from './EditNote';



const Note = ({ id, text, date, handleDeleteNote, }) => {
    return ( <
        div className = 'note' >
        <
        span > { text } < /span> <
        div className = "note-footer" >
        <
        small > { date } < /small>  <
        MdDeleteForever onClick = {
            () => handleDeleteNote(id) }
        className = 'delete-icon'
        size = '1.3em' / >

        <
        span className = "note-edit"
        onClick = { '' } > < FaPencilAlt / > < /span> <
        /div>  <
        /div>
    );



};
export default Note;