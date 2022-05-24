<template>
  <div>
    <h1>B</h1>
    <div class="app-container">
      <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
      <!-- <el-table :data="state.tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
        <el-table-column v-for="item of state.tableHeader" :key="item" :prop="item" :label="item" />
      </el-table> -->
    </div>
    <div>
      <ww-chart-data :chart-data="state.chartData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import UploadExcelComponent from '@/components/UploadExcel/index.vue'
import moment from 'moment'
import WwChartData from '@/components/Self/WwChart/WwChartData/index.vue'
let state = reactive({
  data: {},
  arr: [],
  tableData: [],
  tableHeader: [],
  chartData: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          show: true,
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      show: true,
      data: ['all']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: []
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '',
        type: 'line',
        stack: 'Total',
        emphasis: {
          focus: 'series'
        },
        data: []
      }
    ]
  }
})
const beforeUpload = (file) => {
  return true
}
const handleSuccess = ({ results, header }) => {
  state.tableHeader = header
  state.tableData = results
  state.chartData.xAxis[0].data = []
  state.chartData.series[0].data = []
  const obj = handleDateFn(results)
  console.log(obj)
  obj.map(ele => {
    state.chartData.xAxis[0].data.push(ele[0])
    state.chartData.series[0].data.push(ele[1])
  })
}
const handleDateFn = (data) => {
  const arr = []
  const mapObj = new Map()
  let k = 'n'
  data.map((ele, index) => {
    let n = ele[k]
    let o = mapObj.get(n)
    if (o) {
      o = o + 1
      mapObj.set(n, o)
    } else {
      mapObj.set(n, 1)
    }
  })
  let finalArr = mapObj.entries()
  state.arr = arr.sort((a, b) => {
    return a - b
  })
  return [...finalArr]
  // moment().format('YYYY-MM-DD')
}
const formatDate = (numb, format) => {
  let time = new Date((numb - 1) * 24 * 3600000 + 1)
  return time.getTime()
  time.setYear(time.getFullYear() - 70)
  let year = time.getFullYear() + ''
  let month = time.getMonth() + 1 + ''
  let date = time.getDate() + ''
  if(format && format.length === 1) {
    return year + format + month + format + date
  }
  return year+(month < 10 ? '0' + month : month)+(date < 10 ? '0' + date : date)
}
</script>

<style lang="scss" scoped>

</style>
