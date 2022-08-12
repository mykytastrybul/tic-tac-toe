<script setup>
import { ref, computed } from "vue";

const player = ref("x");
const board = ref([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]);

const winner = computed(() => {
  const [a, b, c] = board.value;
  if (a === b && b === c) return a;
  if (a[0] === b[0] && b[0] === c[0]) return a[0];
  if (a[1] === b[1] && b[1] === c[1]) return a[1];
  if (a[2] === b[2] && b[2] === c[2]) return a[2];
  if (a[0] === b[1] && b[1] === c[2]) return a[0];
  if (a[2] === b[1] && b[1] === c[0]) return a[2];
  return null;
});

const play = (row, col) => {
  if (winner.value) return;
  if (board.value[row][col]) return;
  board.value[row][col] = player.value;
  player.value = player.value === "x" ? "o" : "x";
};

const reset = () => {
  player.value = "x";
  board.value = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
};
</script>

<template>
  <main
    class="pt-8 text-center bg-gray-900 min-h-screen container-xl text-white"
  >
    <h1 class="mb-8 font-bold">Tic Tac Toe</h1>

    <h3 class="mb-4">Player {{ player }}'s turn</h3>

    <div class="flex flex-col items-center mb-8">
      <div v-for="(row, x) in board" :key="x" class="flex">
        <div
          v-for="(cell, y) in row"
          :key="y"
          @click="play(x, y)"
          :class="`border w-24 h-24 hover:bg-gray-500 flex items-center justify-center cursor-pointer ${
            cell === 'x'
              ? 'text-red-900 text-9xl pb-10'
              : 'text-green-800 text-9xl pb-10'
          }`"
        >
          {{ cell }}
        </div>
      </div>
    </div>
    <div class="text-center">
      <h2 v-if="winner" class="text-6xl font-bold mb-8">
        Player '{{ winner }}' wins!
      </h2>
      <button
        @click="reset"
        class="px-5 py-3 bg-gray-500 rounded uppercase font-bold hover:bg-gray-800 duration-500"
      >
        Reset
      </button>
    </div>
  </main>
</template>

<style scoped>
h1,
h3 {
  font-size: 30px;
}
</style>
