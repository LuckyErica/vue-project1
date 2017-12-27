# weixiaoyuan

> a school web

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#生命周期

beforeCreate

在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。

created

实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

beforeMount

在挂载开始之前被调用：相关的 render 函数首次被调用。

mounted

el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。

beforeUpdate

数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

updated

由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。

该钩子在服务器端渲染期间不被调用。

beforeDestroy

实例销毁之前调用。在这一步，实例仍然完全可用。

destroyed

Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。

#生命周期测试
beforeCreate(){
    console.log('创建前')
    console.log(this.$route.path)
  },
  created(){
    console.log('创建后')  
    console.log(this.$route.path)
  },
  beforeMount(){
    console.log('载入前')  
    console.log(this.$route.path)
  },
  mounted(){
    console.log('载入后')  
    console.log(this.$route.path)
  },
  beforeUpdate(){
    console.log('更新前') 
    console.log(this.$route.path) 
  },
  updated(){
    console.log('更新后')  
    console.log(this.$route.path)
  },
  beforeDestroy(){
    console.log('销毁前')  
    console.log(this.$route.path)
  },
  destroyed(){
    console.log('销毁后') 
    console.log(this.$route.path) 
  }