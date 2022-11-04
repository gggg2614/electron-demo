<template>
  <div class="box">
    <div class="box-left"></div>
    <div id="china" class="box-center"></div>
    <div class="box-right"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useStore } from "./store";
import * as echarts from "echarts";
import "./assets/china";
import {geoCoordMap} from "./assets/geoMap";

const store = useStore();

var mapDate = [
  {
    name: "青岛",
    value: [120.417483, 36.110931],
    datas: 1354,
  },
];

onMounted(async () => {
  await store.getList();
  const city = store.list.diseaseh5Shelf.areaTree[0].children;
  const data = city.map(v=>{
    return{
      name:v.name,
      value:geoCoordMap[v.name].concat(v.total.nowConfirm)
    }
  })
  const charts = echarts.init(document.querySelector("#china") as HTMLElement);
  charts.setOption({
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "100%",
      itemStyle: {
        //  normal: {
        areaColor: {
          type: "linear-gradient",
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#152E6E", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0673AD", // 50% 处的颜色
            },
          ],
          global: true, // 缺省为 false
        },
        shadowColor: "#0f5d9d",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5,
        // },
      },
      emphasis: {
        areaColor: "#0f5d9d",
      },
      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            //normal: {
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9",
            },
            //},
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: "map",
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "100%",
        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 12,
        },
        itemStyle: {
          areaColor: "#0c3653",
          borderColor: "#1cccff",
          borderWidth: 1.8,
        },
        emphasis: {
          areaColor: "#56b1da",
          label: {
            show: true,
            color: "#fff",
          },
        },
        data: data,
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin',
        symbolSize: [45, 45],
        label: {
          show: true,
          color: "#fff",
          formatter(value: any) {
            return value.data.value[2]
          }
        },
        itemStyle: {
          color: '#1E90FF', //标志颜色
        },
        data: data,
      },
    ],
  })
});
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  height: 100%;
  overflow: hidden;
  width: 100%;
  background: url("./assets/background.jpg") no-repeat;
  background-size: 100%;
  background-attachment: fixed;
}
.box {
  height: 100%;
  display: flex;
  overflow: hidden;
  &-left {
    width: 200px;
  }
  &-center {
    flex: 1;
    height: 100%;
    width: 100%;
  }
  &-right {
    width: 200px;
  }
}
</style>
