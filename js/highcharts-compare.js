Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    }
})

Highcharts.chart('container', {
    chart: {
        type: 'column',
        backgroundColor: '#2f4046'
    },
    title: {
        text: 'Data PHK',
        align: 'left',
        style: {
            color: "#fff",
            font: 'normal 24px "Poppins", sans-serif',
            // lineHeight: '2rem'
        }
    },
    subtitle: {
        align: 'left',
        text:
            'Source: <a target="_blank" ' +
            'href="https://adisdimensionfootwear.id/wp-content/uploads/2024/05/GRI-ADIS-2023-1.pdf">Adis Dimension</a>, <a target="_blank" ' +
            'href="https://finance.detik.com/berita-ekonomi-bisnis/d-7810760/dua-pabrik-sepatu-di-tangerang-tutup-3-500-pekerja-jadi-korban-phk.">Detik</a>'
        ,
        style: {
            color: "#ccc",
            font: 'normal 12px "Source Code Pro", sans-serif',
            // lineHeight: '2rem'
        }
    },
    legend: {

        itemStyle: {
            font: 'normal .9rem Source Code Pro',
            color: '#fff'
        },

    },
    credits: {
        enabled: false //buat highcharts com
    },
    xAxis: {
        categories: ['PT Adis Dimension Footwear', 'PT Victory Chingluh'],
        crosshair: true,
        labels: {
            // text: null,
            style: {
                color: "#ccc",
                font: '12px "Source Code Pro", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
        accessibility: {
            description: 'Countries'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: null
        }
        ,
        labels: {
            // text: null,
            style: {
                color: "#ccc",
                font: '12px "Source Code Pro", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
    },
    tooltip: {
        valueSuffix: ' orang'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Karyawan',
            data: [8663, 2400]
        },
        {
            name: 'PHK',
            data: [1500, 2000]
        }
    ]
});
