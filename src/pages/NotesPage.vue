<template>
    <main>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
            <!-- Enclose in a section -->
                <!-- Button to toggle notes field !-->
                <!-- Create notes field !! -->
                <div id="newNoteContainer" class="">
                    <NewNoteSection/>
                </div>
            </div>
            <!-- <h1>{{store.user.name}} note's</h1> -->
            <div class="grid gap-3 row">
                <!-- Display list of notes in a row -->
                <!-- need to use for loop to display notes -->
                        <NoteThumbNail/>
                        <NoteThumbNail/>
                        <NoteThumbNail/>
                        <NoteThumbNail/>
                        <NoteThumbNail/>
                        <NoteThumbNail/>
            </div>
        </div>
    </div>
    </main>
</template>


<script setup>

import {onMounted} from "vue";
import NewNoteSection from "../components/notes/NewNoteSection.vue";
import NoteThumbNail from "../components/notes/NoteThumbNail.vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import {useNoteStore } from "../stores/note";

const router = useRouter()
const store = useAuthStore()
const notesStore = useNoteStore()
const { isLoggedIn, errors } = storeToRefs(store)
const { fetchAllNotes } = notesStore;


// on page load determine if user is logged in.
//if not logged in push to login page.
onMounted( async () =>{
if(isLoggedIn.value === null || isLoggedIn.value === false){
    router.push({ name: 'login' })
}

await fetchAllNotes()

})

</script>


<style scoped>
#newNoteContainer{
    display: none;
}

</style>