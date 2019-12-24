<template>
  <div class="home">
    <button @click="handleClick">弹出toast</button>
    <drunkard-input value="" label="用户名" type="text">
      <button>提交</button>
    </drunkard-input>
    <test-toast ref="toast"></test-toast>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
    handleClick(){
      this.$nextTick(()=>{
        this.$refs.toast.toastPlugin("调用toast",2000)
      })
    }
  }
}
</script>
