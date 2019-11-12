<template>
  <div>
    <div style="width: 100%">
      <h3>Draggable {{ draggingInfo }}</h3>

      <draggable
        :list="list"
        :disabled="!enabled"
        class="list-group"
        ghost-class="ghost"
        :move="checkMove"
        @start="dragging = true"
        @end="dragging = false">
        <div
          class="list-group-item"
          v-for="element in list"
          :key="element.name">
          {{ element.name }}
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
  import draggable from "vuedraggable";

  export default {
    name: "SubPage3",
    data(){
      return {
        enabled: true,
        list: [
          {name: "John", id: 0},
          {name: "Joao", id: 1},
          {name: "Jean", id: 2},
          {name: "John1", id: 4},
          {name: "Joao1", id: 3},
          {name: "Jean1", id: 5},
          {name: "John", id: 6},
          {name: "Joao", id: 7},
          {name: "Jean", id: 8},
          {name: "John1", id: 9},
          {name: "Joao1", id: 10},
          {name: "Jean1", id: 11}
        ],
        dragging: false
      }
    },
    methods:{
      checkMove: function (e) {
        window.console.log("Future index: " + e.draggedContext.futureIndex);
      }
    },
    components: {
      draggable
    }
  }
</script>

<style scoped>
  .buttons {
    margin-top: 35px;
  }

  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  .list-group-item{
    background-color: white;
  }
</style>
