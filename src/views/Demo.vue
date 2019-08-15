<template>
    <div class="box">
        <el-button type="primary" @click="display = true">打开抽屉</el-button>
        <drawer title="我是一个抽屉组件" :display.sync="display" :inner="true" :width="drawerWidth" :mask="false">
            1. Hello, world!
            2. Do you like it?
        </drawer>
    </div>
</template>

<script>
import drawer from '@/components/drawer/drawer'
export default {
    components: { drawer },
    data () {
        return {
            display: false,
            drawerWidth: '500px'
        }       
    }
}
</script>

