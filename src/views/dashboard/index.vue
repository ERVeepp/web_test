<template>
  <div>
    <div class="app-container">
      <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
      <!-- <el-table :data="state.tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
        <el-table-column v-for="item of state.tableHeader" :key="item" :prop="item" :label="item" />
      </el-table> -->
    </div>
    <div>
      <ww-chart-data :chart-data="state.chartData" />
    </div>
    <div>
      <p>{{state.arr}}</p>
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
  // console.log(header, results)
  state.tableData = results
  state.tableHeader = header
  const obj = handleDateFn(results)
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const element = obj[key]
      state.chartData.xAxis[0].data.push(key)
      state.chartData.series[0].data.push(element)
    }
  }
}
const handleDateFn = (data) => {
  state.chartData.xAxis[0].data = []
  state.chartData.series[0].data = []
  const arr = []
  const obj = {}
  data.map((ele, index) => {
    let touchTime = ele['Attributed Touch Time']
    let installTime = ele['Install Time']
    // console.log(touchTime, installTime)
    let a = formatDate(touchTime, '/')
    let b = formatDate(installTime, '/')
    let c = 0
    if (!isNaN(a) && !isNaN(b)) {
      c = (b - a) / 1000
      c = parseInt(c)
      if (obj.hasOwnProperty(c)) {
        obj[c] ++
      } else {
        obj[c] = 1
      }
      arr.push(c)
    }
  })
  state.arr = arr.sort((a, b) => {
    return a - b
  })
  return obj
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
