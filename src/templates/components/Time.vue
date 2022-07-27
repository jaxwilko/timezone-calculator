<template>
    <div class="time w-full">
        <div class="mx-auto mx-[12px] my-2">
            <div class="inline-flex text-lg border bg-gray-100 rounded-md shadow-lg p-2">
                <select ref="hour" v-on:change="sync()" class="px-2 outline-none appearance-none bg-transparent">
                    <option v-for="index in range(0, 23)" :key="index" :value="index" :selected="index === date.getHours()">{{index.toString().padStart(2, "0")}}</option>
                </select>
                <span class="px-2">:</span>
                <select ref="minute" v-on:change="sync()" class="px-2 outline-none appearance-none bg-transparent">
                    <option v-for="index in range(0, 59)" :key="index" :value="index" :selected="index === date.getMinutes()">{{index.toString().padStart(2, "0")}}</option>
                </select>
                <span class="px-2">:</span>
                <select ref="seconds" v-on:change="sync()" class="px-2 outline-none appearance-none bg-transparent">
                    <option v-for="index in range(0, 59)" :key="index" :value="index" :selected="index === date.getSeconds()">{{index.toString().padStart(2, "0")}}</option>
                </select>
            </div>
        </div>
    </div>
    <div class="date w-full">
        <div class="mx-auto my-2">
            <div class="inline-flex text-lg border bg-gray-100 rounded-md shadow-lg p-2">
                <select ref="year" v-on:change="sync()" class="px-2 outline-none appearance-none bg-transparent">
                    <option v-for="index in range(1970, (new Date()).getFullYear() + 2)" :key="index" :value="index" :selected="index === date.getFullYear()">{{index}}</option>
                </select>
                <span class="px-2">-</span>
                <select ref="month" v-on:change="sync()" class="px-2 outline-none appearance-none bg-transparent">
                    <option v-for="index in range(0, 12)" :key="index" :value="index" :selected="index === date.getMonth()">{{(index + 1).toString().padStart(2, "0")}}</option>
                </select>
                <span class="px-2">-</span>
                <select ref="day" v-on:change="sync()" class="px-2 outline-none appearance-none bg-transparent">
                    <option v-for="index in range(0, (new Date(date.getFullYear(), date.getMonth(), 0)).getDate())" :key="index" :value="index" :selected="index === date.getDate()">{{index.toString().padStart(2, "0")}}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Time",
    props: ["date"],
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
        }
    },
    methods: {
        sync() {
            this.$store.commit("setCurrent", new Date(
                this.$refs.year.value,
                this.$refs.month.value,
                this.$refs.day.value,
                this.$refs.hour.value,
                this.$refs.minute.value,
                this.$refs.seconds.value,
                0
            ));
        },
        range(min, max) {
            const array = []
            for(let i = min; i <= max; i++){
                array.push(i);
            }
            return array;
        }
    }
};
</script>