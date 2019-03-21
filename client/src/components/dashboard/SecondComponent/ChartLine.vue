<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    extends: Line,
    mixins: [reactiveProp],
    props: ['options'],
    mounted () {
        this.renderChart(this.chartData, this.options)
    },
    watch: {
        chartData: function () {
            this._data._chart.destroy()
            this.renderChart(this.chartData, this.options)
        }
    }
}
</script>
