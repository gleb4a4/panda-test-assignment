<script setup lang="ts">
import {computed} from "vue";
import IconArrow from "@/components/icons/IconArrow.vue";

const props = defineProps<{
  city: string,
  timestamp: number,
  wind_deg: number
  temp: number,
  humidity: number,
  uvi: number,
  visibility: number,
  pressure: number,
  dew_point: number,
}>()

const currentTime = computed(() => props.timestamp * 1000);
const prettyDate = computed(() => {
  const currentDate = new Date(currentTime.value)
  const prettyMonth = currentDate.toLocaleString('default', { month: 'short' });
  const prettyDay = currentDate.getDate();
  const hours = Math.floor((currentTime.value / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((currentTime.value / 1000 / 60) % 60);
  return prettyMonth + " " + prettyDay + ", " + (hours < 10 ? "0"+hours : hours) + ":" + (minutes < 10 ? "0"+minutes : minutes);
})
</script>

<template>
<div class="weather_card">
  <div class="weather_card_date" v-text="prettyDate" />
  <h2 v-text="props.city" />
  <div> {{ props.temp }} &#8451;</div>
  <ul>
    <li>
      <IconArrow :style="{'transform': 'rotate(' + wind_deg + ')'}" />
    </li>
    <li v-for="[key, value] in Object.entries(props)" :key="key">
      {{ key }} : {{ value }}
    </li>
  </ul>
</div>
</template>


<style scoped>
.weather_card {
  max-width: 20rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: 0.25rem;
}
.weather_card_date {
  color: #eb6e4b;
  font-size: 14px;
}
</style>