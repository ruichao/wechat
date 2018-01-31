Page({
  data: {
    todos: [],
    filter: 'all',
    inputName: '',
    currentId: 3
  },
  onLoad: function() {
    this.setData({
      todos: wx.getStorageSync('todos') || [],
      filter: wx.getStorageSync('filter') || 'all' ,
      currentId: wx.getStorageSync('currentId') || 1
    })
  },
  onUnload: function() {
    wx.setStorageSync('todos', this.data.todos);
    wx.setStorageSync('filter', this.data.filter);
    wx.setStorageSync('currentId', this.data.currentId);
  },
  addTodo: function(e) {
    if (this.data.inputName.trim().length > 0) {
      this.setData({
        todos: [...this.data.todos, {
          name: this.data.inputName,
          state: 'active',
          id: this.data.currentId++
        }],
        inputName: ''
      })
    }
  },
  deleteTodo: function(e) {
    const id = e.target.dataset.id;
    this.setData({
      todos: this.data.todos.filter((todo) => todo.id !== id)
    });
  },
  toggleState: function(e) {
    this.setData({
      todos: this.data.todos.map((todo) => {
        if (todo.id === e.target.dataset.id) {
          return {...todo, state: todo.state === 'active' ? 'finished' : 'active'}
        }
        return todo;
      })
    });
  },
  bindInput: function(e) {
    this.setData({
      inputName: e.detail.value
    });
  },
  changeFilter: function(e) {
    this.setData({
      filter: e.target.dataset.filter
    });
  }
})