<script setup>
import NewNoteSection from "../components/notes/NewNoteSection.vue";
</script>

<template>
    <main>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-md-2">
            <!-- Enclose in a section -->
                <!-- Button to toggle notes field !-->
                <!-- Create notes field !! -->
                <NewNoteSection/>
            </div>

            <div>
                <!-- Display list of notes -->
                <h1>"Username" Notes !</h1>
            </div>
            
        </div>
        
    </div>
    </main>
</template>


