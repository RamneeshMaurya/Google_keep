import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from './components/Search';
import Header from './components/Header';
import Note from './components/Note';
import EditNote from './components/EditNote';

const App = () => {
    const [notes, setNotes] = useState([{
                id: nanoid(),
                text: "this is NOVA project.. ",
                date: "22/09/2022",
            },
            {
                id: nanoid(),
                text: "this is NOVA project....",
                date: "22/09/2022",
            },
            {
                id: nanoid(),
                text: "this is NOVA project.....",
                date: "22/09/2022",
            },
            {
                id: nanoid(),
                text: 'this is NOVA projectss..',
                date: "22/09/2022",
            },

        ]

    );

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem('react-nova-app-data')
        );

        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            'react-nova-app-data',
            JSON.stringify(notes)
        );
    }, [notes]);

    const editNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);

    };

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);

    };
    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    return ( <
        div className = "container" >
        <
        Header / >
        <
        Search handleSearchNote = { setSearchText }
        /> <
        NotesList notes = { notes.filter((note) => note.text.toLowerCase().includes(searchText)) }
        handleAddNote = { addNote }
        handleDeleteNote = { deleteNote }

        />

        <
        /div>
    );
};
export default App;