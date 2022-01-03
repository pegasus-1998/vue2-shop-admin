import vm from '@/main.js'

function packMes(type, message) {
    vm.$message({
        type,
        message
    })
}


export {
    packMes
}