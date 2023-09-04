<template>
  <div id="mySelf">
    @/views/my/mySelf
    <!-- <citySel :value="selectId" @input="selectId = $event"></citySel> -->
    <!-- <citySel :value="selectId" @input="changeId"></citySel> -->
    <citySel v-model="selectId"></citySel>
  </div>
</template>

<script>
import citySel from '@/components/citiesSel'
export default {
  name: 'mySelf',
  components: {
    citySel
  },
  data () {
    return {
      selectId: '104'
    }
  },
  methods: {
    // changeId (val) {
    //   this.selectId = val
    // }
  }
}
</script>

<style>
</style>
