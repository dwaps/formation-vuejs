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
      <input v-show="hasTodos" type="checkbox" class="toggle-all" v-model="allDone">
      <ul class="todo-list" v-for="todo in filteredTodos">
        <li class="todo" :class="{completed: todo.completed, editing: todo === editable}">
          <div class="view">
            <input type="checkbox" v-model="todo.completed" class="toggle">
            <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
            <button class="destroy" @click.prevent="deleteTodo(todo)"></button>
          </div>
          <input
            type="text"
            @keyup.enter="editingDone"
            @blur="editingDone"
            v-focus="todo === editable"
            class="edit"
            v-model="todo.name">
        </li>
      </ul>
    </div>

    <footer class="footer" v-show="hasTodos">
      <span class="todo-count"><strong>{{ remaining }}</strong> tâches à faire</span>
      <ul class="filters">
        <li>
          <a
            href="#"
            :class="{selected: filter === 'all'}"
            @click.prevent="filter = 'all'">Toutes</a>
        </li>
        <li>
          <a
            href="#"
            :class="{selected: filter === 'todo'}"
            @click.prevent="filter = 'todo'">A faire</a>
        </li>
        <li>
          <a
            href="#"
            :class="{selected: filter === 'done'}"
            @click.prevent="filter = 'done'">Faites</a>
        </li>
      </ul>
      <button
        v-show="atLeastOneDone"
        class="clear-completed"
        @click="deleteCompleted">
          Supprimer les tâches finies
      </button>
    </footer>
  </section>
</template>

<script src="./Todos.js"></script>
<style src="./todos.css"></style>
