<template>
    <div>
        <b-container>
            <b-row>
                <b-col id="question" v-if="question">
                    <p
                        class="font-weight-bold text-center"
                        v-html="question.question"
                    ></p>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-button
                        id="btn-answers"
                        variant="outline-dark"
                        @click="onAnswerClick(0)"
                        v-html="answers[0]"
                    >
                    </b-button>
                </b-col>
                <b-col>
                    <b-button
                        id="btn-answers"
                        variant="outline-dark"
                        @click="onAnswerClick(1)"
                        v-html="answers[1]"
                    >
                    </b-button
                ></b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-button
                        id="btn-answers"
                        variant="outline-dark"
                        @click="onAnswerClick(2)"
                        v-html="answers[2]"
                    ></b-button
                ></b-col>
                <b-col>
                    <b-button
                        id="btn-answers"
                        variant="outline-dark"
                        @click="onAnswerClick(3)"
                        v-html="answers[3]"
                    >
                    </b-button>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <h3 class="mt-5" id="text-score">Score: {{ score }}</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-progress
                        id="progress-bar"
                        :value="index"
                        max="9"
                        animated
                        class="mt-5"
                    ></b-progress>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import _ from "lodash";

export default {
    name: "QuizQuestionComponent",
    props: {
        question: Object,
        index: Number
    },
    data() {
        return {
            answers: [],
            correctAnswer: Number,
            selectedAnswer: Number,
            score: 0
        };
    },
    watch: {
        question: function() {
            if (this.question) {
                let answers = [
                    ...this.question.incorrect_answers,
                    this.question.correct_answer
                ];
                this.answers = _.shuffle(answers);
                this.correctAnswer = this.answers.indexOf(
                    this.question.correct_answer
                );
            }
        }
    },
    methods: {
        onAnswerClick: function(value) {
            this.selectedAnswer = value;
            let correct = false;
            if (this.selectedAnswer === this.correctAnswer) {
                correct = true;
                this.score += 10;
                this.$emit("score", correct, this.score);
            }
            this.$emit("handleAnswer", correct, this.question.question);
        }
    }
};
</script>

<style>
#question {
    height: 15vh;
    width: 35vw;
    margin-top: 15px;
    padding-top: 40px;
    color: white;
}

#btn-answers {
    height: 15vh;
    width: 25vw;
    margin: 10px 0 0;
    padding: 50px;
    color: white;
    font-weight: 500;
    border: 1px solid white;
}

#progress-bar {
    border: 1px solid black;
    height: 2rem;
}

#text-score {
    color: white;
}
</style>
