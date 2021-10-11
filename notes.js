const notes = [
    {
        id: 1,
        subject: "General",
        date: "10/5",
        feeling: "Struggled to stay focused really bad. i understand the syntax of javaScript somewhat but i need clarification on somethings.",
        timeSpent: 4
    },
]

const note2 = {
    id: 2,
    subject: "JavaScript",
    date: "10/6",
    feeling: "Got some help this morning and got some really good sleep last night. feeling better and learning everyday.",
    timeSpent: 2,
}
notes.push(note2)
const note3 = {
    subject: "JavaScript",
    date: "10/7",
    feeling: "Working on getting the hang on function.",
    timeSpent: 2
}
const createNote = (note) => {
    const lastIndex = note.length - 1
    const currentLastItem = note[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId + 1
    note.id = idForNewItem
    notes.push(note)
}


// const searchTerm = "javascript"
// for (const keyword of notes) {
//     if (keyword.subject === searchTerm) {
//         console.log(keyword)
//     }
// }

//console.log(notes)

// id (Unique identifier, or primary key)
// subject (What you learned about)
// date (The date you learned it)
// feeling (How you felt when learning it)
// timeSpent (Roughly how long you learned about it, minutes)