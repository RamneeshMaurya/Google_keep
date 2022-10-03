import { useState } from "react";
import { MdAddBox } from "react-icons/md";

const AddNote = ({ handleAddNote, }) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;
    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        };

    };

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }

    };
    return ( <
        div className = "note new" >
        <
        textarea rows = "8"
        cols = "10"
        placeholder = "Type to add a note..."
        onChange = { handleChange }
        value = { noteText } >

        <
        /textarea> <
        div className = "note-footer" >
        <
        small > { characterLimit - noteText.length }
        Remaining < /small> <
        button className = "save-a"
        onClick = { handleSaveClick } >
        <
        MdAddBox className = "search-icons-2"
        size = '2.3em' / >
        <
        /button> <
        /div>    <
        /div>
    )
};
export default AddNote;