<template>
    <div class="drunkard-input-group">
        <div class="drunkard-label" v-if="leftIcon || label">
            <label v-if="leftIcon">{{leftIcon}}</label>
            <label v-if="label">{{label}}</label>
        </div>
        <div class="drunkard-input" :class="className">
            <input :type="type" :value="inputValue" 
                :placeholder="placeholder"
            />
        </div>
        <div class="drunkard-right"><slot/></div>
    </div>
</template>
<script>

export default {
  name: 'drunkardInput',
  props:{
      value:{
          type : String,
          default: '',
      },
      label:{
          type:String,
          default: ''
      },
      placeholder:{
          type:String,
          default: '请输入内容'
      },

      leftIcon:{
          type:String,
          default: ''
      },
      rightIcon:{
          type:String,
          default: ''
      },
      className:{
          type:String,
          default: ''
      },
      type:{
          type:String,
          default: 'text'
      }
  },
  data() {
      return {
        inputValue : this.value
      }
  },
  watch: {
      value(newValue,oldValue){
          this.inputValue = newValue
      }
  },
}
</script>
<style scoped>
.drunkard-input-group{
    width: 100%;
    height: 42px;
    background: #ffffff;;
    display:inline-flex;
    justify-content: space-between;
}
.drunkard-label{
    min-width: 20%;
    flex-shrink: 0;
    line-height: 42px;
    vertical-align: middle;
}
.drunkard-label label{
    line-height: 42px;
    vertical-align: middle;
}
.drunkard-input{
    width: 100%;
    flex-shrink: 1;
    vertical-align: middle;
    
}
.drunkard-input input{
    width: 98%;
    height: 100%;
    padding: 0 1%;
    border:none;
    outline: none;
    line-height: 42px;
    vertical-align: middle;
}
.drunkard-input input::placeholder{
    line-height: 42px;
    vertical-align: middle;
}
.drunkard-right{
    flex-shrink: 0;
    height:42px;
    vertical-align: middle;
    display:flex;
}
</style>
