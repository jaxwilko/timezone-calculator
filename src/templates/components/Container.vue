<template>
    <div class="flex flex-row items-center items-stretch">
        <div v-for="child in children" :key="child.name" class="flex items-stretch">
            <component :is="child" :timezone="Intl.DateTimeFormat().resolvedOptions().timeZone"></component>
        </div>
        <div class="flex items-center px-12">
            <button @click="addTag()" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import Timezone from "./Timezone";

import { ref } from "vue"

export default {
    name: "Time",
    components: {
        Timezone
    },
    setup() {
        const children = ref(['Timezone']);

        const addTag = () => {
            children.value.push('Timezone')
        };

        return {
            addTag,
            children
        };
    },
}
</script>