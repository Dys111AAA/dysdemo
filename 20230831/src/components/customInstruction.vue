<template>
  <div id="customInstruction">
    @components/customInstruction.vue
    <div v-show="visible">
      <div class="title">
        <button @click="changeC">改变标题颜色</button>
        <h2 v-color="c">标题</h2>
        <div @click="close">X</div>
      </div>
      <!-- @input 实时监听input输入框的改变，把改变后的值，存储到val数据中 -->
      <input type="text" :value="value" @input="val=$event.target.value" v-focus>
      <button @click="submit">确认</button>
    </div>
    <!-- custom  自定义指令 -->
    <!-- Instruct  指令 -->
    <!-- Instruction   一组指令 -->
  </div>
</template>

<script>
export default {
  name: 'customInstruction',
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    value: String
  },
  data () {
    return {
      val: '',
      c: 'red'
    }
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    },
    submit () {
      this.$emit('input', this.val)
    },
    changeC () {
      let r = parseInt(Math.random() * 255)
      let g = parseInt(Math.random() * 255)
      let b = parseInt(Math.random() * 255)
      this.c = `rgba(${r}, ${g}, ${b}, 1)`
    }
  },
  // 自定义指令:在此处可以定义多个指令
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    },
    color: {
      inserted (el, binding) {
        console.log(el, binding, 51)
        el.style.color = binding.value
      },
      update (el, binding) {
        console.log(el, binding, 55)
        el.style.color = binding.value
      }
    }
  }
}
</script>

<style>
</style>
