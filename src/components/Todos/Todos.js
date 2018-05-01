import Vue from 'vue';

export default {
  data() {
    return {
      todos: [],
      newTodo: '',
      filter: 'all',
      editable: null,
      oldTodo: '',
    }
  },
  computed: {
    hasTodos() { return this.todos.length > 0; },
    atLeastOneDone() { return this.todos.filter(todo => todo.completed).length; },
    remaining() { return this.todos.filter(todo => !todo.completed).length; },
    allDone: {
      get() {
        return this.remaining === 0;
      },
      set(checked) {
        this.todos.forEach(todo => todo.completed = checked);
      }
    },
    filteredTodos() {
      switch(this.filter) {
        case 'todo': return this.todos.filter(todo => !todo.completed);
        case 'done': return this.todos.filter(todo => todo.completed);
      }
      return this.todos;
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        completed: false,
        name: this.newTodo
      });
      this.newTodo = '';
    },
    deleteTodo(todo) { this.todos = this.todos.filter(currentTodo => currentTodo !== todo); },
    deleteCompleted() { this.todos = this.todos.filter(todo => !todo.completed); },
    editTodo(todo) {
      this.editable = todo;
      this.oldTodo = todo.name;
    },
    editingDone() { this.editable = null; },
    cancelEditing() {
      this.editable.name = this.oldTodo;
      this.editingDone();
    }
  },
  directives: {
    focus(el, value) {
      if (value) {
        Vue.nextTick(() => {
          el.focus();
        })
      }
    }
  }
}