<template>
  <div id="container" class="container hide">
    <div id="question-container" class="hide">
      <div id="question">Question</div>
      <input type="text" id="guess-answer" class="hide" />
      <div id="answer-buttons" class="btn-grid">
        <button class="btn">Answer 1</button>
        <button class="btn">Answer 2</button>
        <button class="btn">Answer 3</button>
        <button class="btn">Answer 4</button>
      </div>
    </div>
    <button id="info" class="info-btn btn hide">i</button>
    <div class="controls">
      <button id="restart-btn" class="restart-btn btn hide">Restart</button>
      <button id="next-btn" class="next-btn btn hide">Weiter</button>
      <button id="answer-btn" class="answer-btn btn hide">Antwort</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>