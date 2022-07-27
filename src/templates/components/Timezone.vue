<template>
    <div class="flex flex-col justify-center px-12" :style="'background-color:' + color">
        <div>
            <Time ref="time" :date="time"></Time>
        </div>
        <select v-model="timezone" class="inline-flex text-lg border bg-gray-100 rounded-md shadow-lg p-2">
            <option v-for="tz in timezones" :value="tz" :selected="tz === timezone">{{tz.split("/")[1]}}</option>
        </select>
    </div>
</template>

<script>
import Time from './Time';

export default {
    name: "Timezone",
    props: ["timezone"],
    components: {
        Time
    },
    computed: {
        time: {
            get() {
                const timeZone = this.$props.timezone;
                return new Date(
                    this.$store.getters.getCurrent.toLocaleString('en-US', {
                        timeZone
                    }),
                );
            }
        },
        timezones: {
            get() {
                return Intl.supportedValuesOf('timeZone');
            }
        },
        color: {
            get() {
                return `#${("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(-6)}bf`
            }
        }
    }
};
</script>