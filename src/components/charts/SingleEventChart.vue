<template>
  <div id="singleEvent">
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
    ></fusioncharts>
  </div>
</template>

<script>
import data from './config/SingleEventChart';
const schema = [
  {
    name: 'Time',
    type: 'date',
    format: '%b-%Y',
  },
  {
    name: 'Interest Rate',
    type: 'number',
  },
];
export default {
  data() {
    return {
      width: '40%',
      height: '400',
      type: 'timeseries',
      dataFormat: 'json',
      dataSource: {
        data: null,
        caption: {
          text: 'Interest Rate Analysis',
        },
        subCaption: {
          text: 'Federal Reserve (USA)',
        },
        yAxis: [
          {
            plot: 'Interest Rate',
            format: {
              suffix: '%',
            },
            title: 'Interest Rate',
          },
        ],
        xAxis: {
          plot: 'Time',
          timemarker: [
            {
              start: 'Mar-1980',
              label: 'US inflation peaked at 14.8%.',
              timeFormat: '%b-%Y',
              style: {
                marker: {
                  fill: '#D0D6F4',
                },
              },
            },
            {
              start: 'May-1981',
              label:
                'To control inflation, the Fed started {br} raising interest rates to over {br} 20%.',
              timeFormat: '%b-%Y',
            },
            {
              start: 'Jun-1983',
              label:
                'By proactive actions of Mr.Volcker, {br} the inflation falls to 2.4% {br} from the peak of over 14% {br} just three years ago.',
              timeFormat: '%b-%Y',
              style: {
                marker: {
                  fill: '#D0D6F4',
                },
              },
            },
            {
              start: 'Oct-1987',
              label:
                'The Dow Jones Industrial Average lost {br} about 30% of it’s value.',
              timeFormat: '%b-%Y',
              style: {
                marker: {
                  fill: '#FBEFCC',
                },
              },
            },
            {
              start: 'Jan-1989',
              label: 'George H.W. Bush becomes {br} the 41st president of US!',
              timeFormat: '%b-%Y',
            },
            {
              start: 'Aug-1990',
              label:
                'The oil prices spiked to $35 {br} per barrel from $15 per barrel {br} because of the Gulf War.',
              timeFormat: '%b-%Y',
            },
            {
              start: 'Dec-1996',
              label:
                'Alan Greenspan warns of the dangers {br} of "irrational exuberance" in financial markets, {br} an admonition that goes unheeded',
              timeFormat: '%b-%Y',
            },
            {
              start: 'Sep-2008',
              label: 'Lehman Brothers collapsed!',
              timeFormat: '%b-%Y',
            },
            {
              start: 'Mar-2009',
              label:
                'The net worth of US households {br} stood at a trough of $55 trillion.',
              timeFormat: '%b-%Y',
              style: {
                marker: {
                  fill: '#FBEFCC',
                },
              },
            },
            {
              start: 'Oct-2009',
              label: 'Unemployment rate peaked {br} in given times to 10%.',
              timeFormat: '%b-%Y',
            },
          ],
        },
      },
    };
  },
  mounted() {
    const fusionTable = new FusionCharts.DataStore().createDataTable(
      data,
      schema
    );
    this.dataSource.data = fusionTable;
  },
};
</script>

<style></style>
