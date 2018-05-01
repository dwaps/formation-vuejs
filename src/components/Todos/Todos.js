export default {
  data() {
    return {
      todos: [{
        name: 'Tache de test',
        completed: false
      }],
      newTodo: '',
      filter: 'all',
    }
  },
  computed: {
    allDone: {
      get() {
        return this.remaining === 0;
      },
      set(checked) {
        this.todos.forEach(todo => todo.completed = checked);
      }
    },
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