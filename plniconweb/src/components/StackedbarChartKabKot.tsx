import Chart from 'react-apexcharts';

function StackedbarChart(){
    return(
        <>
            <div className="container-fluid mb-3">
                <Chart
                type="bar"
                width={1200}
                height={600}
                series={[
                    {
                        name:"Plan",
                        data:[40,45,78,90,20,50,45,78,90,20,50,45,78,90],
                        color:'#09AEEF'
                    },
                    {
                        name:"On Schedule",
                        data:[6,3,5,8,0,5,10,6,3,5,8,0,5,10],
                        color: '#34AA4F'
                    }
                ]}
                options={{
                    title:{
                        text:"Kabupaten/Kota",
                        style:{
                            fontSize:'20'
                        }
                    },
                    chart:{
                        stacked:true,
                    },
                    plotOptions:{
                        bar:{
                            horizontal:true,
                            columnWidth:'100%'
                        }
                    },
                    stroke:{
                        width:1,
                    },
                    xaxis:{
                        title:{
                            text:"",
                        },
                        categories:[
                            'Bekasi Kabupaten',
                            'Bekasi Kabupaten',
                            'Bekasi Kabupaten',
                            'Bekasi Kabupaten',
                            'Bekasi Kabupaten',
                            'Bekasi Kabupaten',
                            'Bekasi Kabupaten',
                            'Bekasi Kabupaten',
                            'Bekasi Kabupaten',
                            'Bekasi Kabupaten',
                            'Bekasi Kabupaten',
                            'Bekasi Kabupaten',
                            'Bekasi Kabupaten',
                            'Bekasi Kabupaten',
                        ]
                    },
                    yaxis:{
                        title:{
                            text:""
                        },
                    },
                    responsive: [{
                        breakpoint: 1000,
                        options: {
                            plotOptions: {
                                bar: {
                                    horizontal: true
                                }
                            },
                            legend: {
                                position: "bottom"
                            }
                        }
                    }],
                    legend:{
                        position:'bottom'
                    },
                    dataLabels:{
                        enabled:true,
                    },
                    grid:{
                        show:true,
                        column: {
                            colors: ['#EEF0F2', '#e8e6e6']
                        },
                        xaxis:{
                            lines:{
                                show:true
                            }
                        },
                        yaxis:{
                            lines:{
                                show:false
                                
                            }
                        }
                    }
                }}
                />
            </div>
        </>
    )
}

export default StackedbarChart;