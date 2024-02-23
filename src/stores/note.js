import { defineStore } from "pinia";
import {ref, reactive, computed} from "vue";
import { allNotes } from "../http/note-api";

export const useNoteStore = defineStore('', () =>{
    const notes = ref([])

    const fetchAllNotes = async() => {
        const { data } = await allNotes()
        notes.value = data.data
    }


    return {
        notes,
        fetchAllNotes
    }
})
