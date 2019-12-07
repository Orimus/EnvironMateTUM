<template>
  <div id="menu" class="menu-container">
    <div id="menu-buttons" class="menu-grid">
      <div class="menu" id="menue-schrift">Hauptmenü</div>
      <input type="text" id="name-eingabe" placeholder="Vorname" />
      <label class="switch">
        <input type="checkbox" />
        <span class="slider"></span>
      </label>
      <button @click="$emit('start')" id="start-btn" class="start-btn btn">Start</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mainmenu"
};
</script>

<style scoped>
</style>