<script setup lang="ts">
import {onMounted, ref} from 'vue'
import { Chart, registerables } from "chart.js";
const chart:{value:HTMLCanvasElement} = ref(null)

onMounted(() => {
  Chart.register(...registerables);
  new Chart(chart.value,{
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})

})
</script>
<template>
<canvas ref="chart" width="100" height="100" />
</template>



<style scoped>

</style>