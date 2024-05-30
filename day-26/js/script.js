const addBtn = document.querySelector("#add-btn");
const notesContainer = document.querySelector("#notes");
const confirmBox = document.querySelector("#confirm-box");
const yesBtn = document.querySelector("#yes-btn");
const noBtn = document.querySelector("#no-btn");

const saveNote = (e) => {
  const noteValue = e.target.value;
  const noteId = e.target.parentNode.id;
  const note = {
    id: noteId,
    noteText: noteValue
  }
  
  if (localStorage.getItem('notes') === null) {
    let notes = [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
  } else {
    let notes = JSON.parse(localStorage.getItem('notes'));
    const idValues = [];
    notes.forEach(note => {
      idValues.push(note.id);
    });

    if (idValues.includes(noteId)) {
      notes.forEach(note => {
        if (note.id === noteId) {
          note.noteText = noteValue;
        }
      });
      localStorage.setItem('notes', JSON.stringify(notes));
    } else {
      notes.push(note);
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }
}

const getNotes = () => {
  if (localStorage.getItem('notes') !== null) {
    let notes = JSON.parse(localStorage.getItem('notes'));
    notes.forEach(note => {
      addNote(note.id, note.noteText);
    });
  }
}

const createRandomId = () => {
  const idArray = [];
  for (let i = 0; i < 4; i++) {
    idArray.push(Math.floor(Math.random() * 10));
  }
  return idArray.join('');
}

// const removeNote = (element, noteId) => {
//   yesBtn.addEventListener('click', () => {
//     let notes = JSON.parse(localStorage.getItem('notes'));
//     notes.forEach((note, index) => {
//       if (note.id === noteId) {
//         notes.splice(index, 1);
//         confirmBox.classList.remove("visible");
//         element.remove();
//       }
//     });
//     localStorage.setItem('notes', JSON.stringify(notes));
//   });

//   noBtn.addEventListener('click', () => {
//     confirmBox.classList.remove("visible");
//     return;
//   });
// };

const addDeleteBtn = () => {
  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323" class="trash-can"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
    `;
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", (e) => {
    noteElement = e.currentTarget.parentNode;
    const noteId = noteElement.id;

    // Remove Note
    if (confirm('Are you sure to remove the note?')) {
      noteElement.remove();
      if (localStorage.getItem('notes') !== null) {
        let notes = JSON.parse(localStorage.getItem('notes'));
        notes.forEach((note, index) => {
          if (note.id === noteId) {
            notes.splice(index, 1);
          }
        });
        localStorage.setItem('notes', JSON.stringify(notes));
      }
    }
  });
  return deleteBtn;
};

const addNote = (idValue, noteValue) => {
  // Creating the note container
  const noteContainer = document.createElement("div");
  noteContainer.classList.add("note-container");
  noteContainer.id = idValue;
  notesContainer.insertBefore(noteContainer, addBtn);

  // Creating the note input
  const newNote = document.createElement("textarea");
  newNote.name = 'note';
  newNote.value = noteValue;
  newNote.classList.add('note');
  newNote.placeholder = "Empty note";
  noteContainer.appendChild(newNote);

  // Adding the delete button
  noteContainer.appendChild(addDeleteBtn());

  // Saving the notes on localStorage
  newNote.addEventListener('change', saveNote);
};

addBtn.addEventListener("click", () => {
  addNote(createRandomId(), '');
});

document.addEventListener("DOMContentLoaded", () => {
  getNotes();
});
