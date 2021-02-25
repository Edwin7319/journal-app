import {DATA_BASE} from '../firebase/firebase-config';

async function loadNotes(uid) {
    const notesSnapshot = await DATA_BASE()
        .collection(`${uid}/journal/notes`)
        .get();

    const notes = [];
    notesSnapshot
        .forEach(
            (snap) => {
                notes.push({
                    id: snap.id,
                    ...snap.data(),
                })
            }
        );
    return notes;
}

export default loadNotes;