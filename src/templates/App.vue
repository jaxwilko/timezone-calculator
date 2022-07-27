<template>
    <div class="h-screen flex">
        <Container></Container>
    </div>
</template>

<script>
import Container from "./components/Container"

export default {
    name: "App",
    props: [],
    components: {
        Container
    },
    computed: {
        current: {
            get: function() {
                return this.$store.getters.getCurrent
            }
        },
    },
    created() {
        this.$store.commit("setCurrent", new Date());
    }
};
</script>
