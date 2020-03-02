<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar variant="faded" type="dark">
                <b-navbar-brand to="/">
                    <img
                        src="../assets/play-button.svg"
                        class="d-inline-block align-top"
                        alt="Trivia"
                        width="30"
                        height="30"
                    />
                    Trivia
                </b-navbar-brand>
            </b-navbar>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/" exact exact-active-class="active"
                        >Home</b-nav-item
                    >
                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item to="/quiz" exact exact-active-class="active"
                        >Quiz</b-nav-item
                    >
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "NavbarComponent"
};
</script>

<style></style>
