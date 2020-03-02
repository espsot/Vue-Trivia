<template>
    <div>
        <QuizQuestionComponent
            :question="questions[index]"
            @handleAnswer="onAnswerClick"
            @score="fixScore"
            :index="index"
            v-if="index < 10"
        />
        <GameOverComponent
            v-if="index >= 10"
            :resultArray="resultArray"
            :score="score"
        />
    </div>
</template>

<script>
import axios from "axios";
import QuizQuestionComponent from "./QuizQuestionComponent";
import GameOverComponent from "./GameOverComponent";

export default {
    name: "GamePlayComponent",
    components: { QuizQuestionComponent, GameOverComponent },

    data() {
        return {
            questions: [],
            resultArray: [],
            index: 0,
            score: 0
        };
    },
    created() {
        axios
            .get(
                "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple"
            )
            .then(res => {
                this.questions = res.data.results;
            });
    },
    methods: {
        nextQuestion() {
            this.index++;
        },
        fixScore() {
            this.score += 10;
        },
        onAnswerClick: function(correct, question) {
            this.resultArray.push({
                correct: correct,
                question: question
            });
            this.nextQuestion();
        }
    }
};
</script>

<style></style>
