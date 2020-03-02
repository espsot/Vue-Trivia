<template>
    <b-list-group-item
        :variant="decideColor()"
        class="align-items-center mt-2"
        id="item"
        v-html="result.question"
    ></b-list-group-item>
</template>

<script>
export default {
    name: "GameResultsComponent",
    props: {
        result: Object
    },
    methods: {
        decideColor() {
            return this.result.correct ? "success" : "danger";
        }
    }
};
</script>

<style>
#item {
    margin: 0 auto;
}
</style>
