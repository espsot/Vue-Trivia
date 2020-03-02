<template>
    <div id="home">
        <img src="../assets/quiz-photo.png" id="quiz-img" />
        <br />
        <b-link v-bind:to="'quiz'">
            <b-button pill id="btn-start" variant="primary"
                >Start Quiz!</b-button
            >
        </b-link>
    </div>
</template>

<script>
export default {
    name: "Home"
};
</script>

<style>
#quiz-img {
    margin-top: 10vh;
    margin-bottom: 5vh;
    width: 35vw;
    min-width: 400px;
    height: auto;
}

#home {
    height: 50vh;
}

#btn-start {
    height: 10vh;
    width: 15vw;
    max-height: 7vh;
    max-width: 13vw;
}
</style>
