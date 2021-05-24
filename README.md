## 一、todoList案例相关知识点
  1.拆分组件、实现静态组件，注意：className、style的写法
  2.动态初始化列表，如何确定将数据放在自身state中
    -某个组件使用：放在自身的state中
    -某些自建使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
  3.冠以父子之间通信：
    父组件 给 子组件 传递数据：通过props传递
    子组件 给 父组件 传递数据：通过props传递，要求父提前给子传递一个数据
  4.注意defaultChecked和checked的区别，类似还有：defaultValue和   Value
  5.状态在哪里，操作状态的方法就在那里
