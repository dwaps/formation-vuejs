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
    remaining() {
      return this.todos.filter(todo => !todo.completed).length;
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