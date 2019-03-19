<template>
  <div class="role-box">
    role
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$api.roles.list({ p: 1, user_key: localStorage.getItem('key') }).then(res => {
        this.list = res.data.data
        console.log(res)
      })
    }
  }
}
</script>
