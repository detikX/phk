Highcharts.chart('container-yamaha', {
    chart: {
        // type: 'column',
        // backgroundColor: '#2f4046'
        backgroundColor: 'transparent'
    },
    title: {
        text: 'Data Keuangan Beberapa Tahun Terakhir',
        align: 'left',
    },

    subtitle: {
        text: null
    },

    yAxis: {
        title: {
            text: null
        },
        labels: {
            // text: null,
            style: {
                color: "#222",
                font: '12px "Source Code Pro", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
    },
    credits: {
        enabled: false //buat highcharts com
    },

    xAxis: {
        accessibility: {
            rangeDescription: null
        },
        labels: {
            // text: null,
            style: {
                color: "#222",
                font: '12px "Source Code Pro", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2012
        }
    },

    series: [{
        name: 'Keuangan',
        data: [
            93.7, 86.1, 191.4, 208.9, 279.6, 286.1, 325.7, 367.6, 347.3, 292.7, 304.8, 271.1, 167.1

        ]
    }],
    tooltip: {
        valueSuffix: ' Juta Dolar'
    },

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
