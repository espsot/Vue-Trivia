<template>
    <div id="center">
        <h3 class="mt-5" id="text-score">Score: {{ score }}</h3>
        <b-list-group
            v-for="(result, index) in resultArray"
            :key="index"
            id="result-component"
            class="align-items-center text-center"
        >
            <GameResultsComponent
                :result="result"
                class="align-items-center text-center"
            />
        </b-list-group>

        <router-link to="/"
            ><b-button variant="success" id="btn-restart" class="mt-3 mb-3"
                >Restart</b-button
            ></router-link
        >
    </div>
</template>

<script>
import GameResultsComponent from "./GameResultsComponent";

export default {
    name: "GameOverComponent",
    components: {
        GameResultsComponent
    },
    props: {
        resultArray: Array,
        score: Number
    }
};
</script>

<style>
#center {
    margin: 0 auto;
    min-width: 10em;
    width: 50%;
}

#text-result {
    color: white;
    font-weight: 500;
}
</style>
