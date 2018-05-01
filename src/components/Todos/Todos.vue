<template>
  <section class="todoapp">

    <header class="header">
      <h1>Todos</h1>
      <input
        type="text"
        class="new-todo"
        placeholder="Ajouter une tâche"
        v-model="newTodo"
        @keyup.enter="addTodo">
    </header>

    <div class="main">
      <input type="checkbox" class="toggle-all" v-model="allDone">
      <ul class="todo-list" v-for="todo in filteredTodos">
        <li class="todo" :class="{completed: todo.completed}">
          <input type="checkbox" v-model="todo.completed" class="toggle">
          <div class="view"><label>{{ todo.name }}</label></div>
        </li>
      </ul>
    </div>

    <footer class="footer">
      <span class="todo-count"><strong>{{ remaining }}</strong> tâches à faire</span>
      <ul class="filters">
        <li>
          <a
            href="#"
            :class="{selected: filter === 'all'}"
            @click="filter = 'all'">Toutes</a>
        </li>
        <li>
          <a
            href="#"
            :class="{selected: filter === 'todo'}"
            @click="filter = 'todo'">A faire</a>
        </li>
        <li>
          <a
            href="#"
            :class="{selected: filter === 'done'}"
            @click="filter = 'done'">Faites</a>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script src="./Todos.js"></script>
<style src="./todos.css"></style>
