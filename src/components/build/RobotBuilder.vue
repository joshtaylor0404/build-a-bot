<template>
  <div>
    <div class="top-row">
      <div class="top part">
        <img v-bind:src="availableParts.heads[selectedHeadIndex].src" title="head">
        <button class="prev-selector" v-on:click="selectNext('Head', 'heads')">&#9668;</button>
        <button class="next-selector" v-on:click="selectPrevious('Head', 'heads')">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="availableParts.arms[selectedLeftArmIndex].src" title="left arm">
        <button class="prev-selector"
        v-on:click="selectNext('LeftArm', 'arms')">&#9650;</button>
        <button class="next-selector"
        v-on:click="selectPrevious('LeftArm', 'arms')">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="availableParts.torsos[selectedTorsoIndex].src" title="left arm">
        <button class="prev-selector"
        v-on:click="selectNext('Torso', 'torsos')">&#9668;</button>
        <button class="next-selector"
        v-on:click="selectPrevious('Torso', 'torsos')">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="availableParts.arms[selectedRightArmIndex].src" title="left arm">
        <button class="prev-selector"
        v-on:click="selectNext('RightArm', 'arms')">&#9650;</button>
        <button class="next-selector"
        v-on:click="selectPrevious('RightArm', 'arms')">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img v-bind:src="availableParts.bases[selectedBaseIndex].src" title="left arm">
        <button class="prev-selector"
        v-on:click="selectNext('Base', 'bases')">&#9668;</button>
        <button class="next-selector"
        v-on:click="selectPrevious('Base', 'bases')">&#9658;</button>
      </div>
    </div>
  </div>
</template>

<script>
import availableParts from '../../data/parts';

function getPreviousValidIndex(index, length) {
  const depricatedIndex = index - 1;
  return depricatedIndex < 0 ? length - 1 : depricatedIndex;
}

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
  name: 'RobotBuilder',
  data() {
    return {
      availableParts,
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedRightArmIndex: 0,
      selectedBaseIndex: 0,
    };
  },
  methods: {
    selectNext(partIndexName, partPropertyName) {
      this[`selected${partIndexName}Index`] = getNextValidIndex(
        this[`selected${partIndexName}Index`],
        this.availableParts[partPropertyName].length,
      );
    },
    selectPrevious(partIndexName, partPropertyName) {
      this[`selected${partIndexName}Index`] = getPreviousValidIndex(
        this[`selected${partIndexName}Index`],
        this.availableParts[partPropertyName].length,
      );
    },
  },
};
</script>

<style>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
</style>
