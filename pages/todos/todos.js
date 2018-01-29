Page({
  data: {
    todos: [{
      name: 'buy milk',
      state: 'finished',
      id: 1
    }, {
      name: 'read js',
      state: 'active',
      id: 2
    }],
    filter: 'all',
    inputName: '',
    currentId: 3
  },
  addTodo: function(e) {
    if (this.data.inputName.trim().length > 0) {
      const todos = this.data.todos.push({
        type: 'active',
        name: this.data.inputName,
        state: 'active',
        id: this.currentId++
      });
      this.setData({
        todos: todos,
        inputName: ''
      })
    }
  },
  bindInput: function(e) {
    console.log(e)
    console.log(e.detail.value)
    this.setData({
      inputName: e.detail.value
    })
  }
})