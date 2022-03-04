<template>
  <div class="home">
    <div ref="Echart" style="width: 750px;height: 580px;margin: auto"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import 'echarts-wordcloud';
import { GetWordCloud } from '../api/api'
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      hotwords: [],
      echartData: []
    }
  },
  mounted() {
    this.getWordcloud()
  },
  methods: {
    getWordcloud(){
      GetWordCloud().then(res => {
        this.hotwords = res.data;
        for (let i of this.hotwords) {
          this.echartData.push({
            value: 0,
            name: i.name
          });
        }
        this.drawLine();
      })
    },
    drawLine(){
      let myChart = echarts.init(this.$refs.Echart);
      let options = {
        tooltip: {
          show: false
        },
        series: [{
          type: 'wordCloud',
          gridSize: 8,
          shape: 'star',
          sizeRange: [10, 80],
          rotationRange: [0, 0],
          textStyle: {
            normal: {
              color: function () {
                return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') + ')';
              }
            },
            emphasis: {
              shadowBlur: 8,
              shadowColor: '#555'
            }
          },
          left: 'center',
          top: 'center',
          right: null,
          bottom: null,
          data: this.echartData
        }]
      };
      myChart.setOption(options);
      // myChart.on('click', function (params) {
      //   window.location.href = '/search?val=' + params.name;
      // });
    }
  }
};
</script>
