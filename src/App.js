import React, {
    Component
} from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'


export default class App extends Component {

    //初始化状态
    state = {
        todos: [{
                id: '001',
                name: '吃饭',
                done: true
            },
            {
                id: '002',
                name: '睡觉',
                done: true
            },
            {
                id: '003',
                name: '打代码',
                done: false
            },
        ]
    }

    //addTodo用于添加一个todo，接受的参数是todo对象
    addTodo = (todoObj) => {
        //获取原todos
        const {
            todos
        } = this.state
        //追加一个todo
        const newTodos = [todoObj, ...todos]
        //更新状态
        this.setState({
            todos: newTodos
        })
    }

    //updateTodo用于更新一个todo对象
    updateTodo = (id, done) => {
        //获取原todos
        const {
            todos
        } = this.state
        //加工数据
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return {
                ...todoObj,
                done: done
            }
            else return todoObj
        })
        this.setState({todos: newTodos})
    }

    //deleteTodo用于删除一个todo对象
    deleteTodo = (id)=>{
      //获取todos
      const {
        todos
      } = this.state
      //删除指定id的todo对象
      const newTodos = todos.filter((todoObj) => {
        return todoObj.id !== id
      })
      //更新状态
      this.setState({todos: newTodos})
    }

    //checkAllTodo用于全选
    checkAllTodo = (done) => {
      //获取原来的todos
      const {todos} = this.state
      //加工数据
      const newTodos = todos.map((todoObj) => {
        return {...todoObj, done: done}
      })
      //更新状态
      this.setState({todos: newTodos})
    }

    //clearAll用于清楚所有已完成的
    clearAll = () =>{
      //获取原来的todos
      const {todos} = this.state
      //过滤数据
      const newTodos = todos.filter((todoObj) => {
        return !todoObj.done
      })
      //更新状态
      this.setState({todos: newTodos})
    }

    render() {
        const {
            todos
        } = this.state

        return (
          <div className="todo-container">
            <div className="todo-wrap">
              {/* 头部组件 */}
              <Header addTodo={this.addTodo}/>
              {/* 列表组件 */}
              <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
              {/* 尾部组件 */}
              <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAll={this.clearAll} />
            </div>
          </div>
        )
    }
}