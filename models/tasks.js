// temporary static model
module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([{title: 'Fazer compras'}, {title: 'Consertar o PC'}])
    }
  }
}

//This model initially has only the function Tasks.findAll(), which receives two arguments: params and callback. The variable params will serve as base for sending SQL search queries and callback will return a statuc array of tasks
