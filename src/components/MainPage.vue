<template>
  <v-container fluid>
    To reproduce my issue: Close one of the chips other than the last one.<br />
    You'll see that while the clicked chip does get removed and also disappears from the array (see below the chips),
    the next chip also disappears without actually being removed from the array.<br />
    its VChip is still there (which you can see with the vue inspector), but doesn't contain anything and doesn't show up in the site's HTML.<br />

    <template v-for="ex in example">
      <v-chip
          closable
          @click:close="example.splice(example.findIndex(e => e.name == ex.name), 1)"
      >{{ ex.name }}
      </v-chip>
    </template>
    <template v-for="ex in example">
      <div>{{ ex.name }}</div>
    </template>
  </v-container>
</template>

<script setup lang="ts">

import {ref} from "vue"

const example = ref([{name: "abc"}, {name: "def"}, {name: "ghi"}, {name: "jkl"}])
</script>

<style scoped>

</style>