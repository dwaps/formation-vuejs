export default {
  data() {
    return {
      todos: [{
        name: 'Tache de test',
        completed: false
      }],
      allDone: false,
      newTodo: '',
      filter: 'all',
    }
  },
  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.completed).length;
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
    }
  }
}