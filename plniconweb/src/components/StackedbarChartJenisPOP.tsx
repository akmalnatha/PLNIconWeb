import Chart from 'react-apexcharts';

interface StackedBarChartProps {
    dataRealisasi: number[];
    dataRemaining: number[];
}

function StackedbarChart({dataRealisasi, dataRemaining} : StackedBarChartProps){
    return(
        <>
            <div className="container-fluid mb-3">
                <Chart
                type="bar"
                width={1200}
                height={400}
                series={[
                    {
                        name:"Realisasi",
                        data:dataRealisasi,
                        color:'#F266AB'
                    },
                    {
                        name:"Remaining from target",
                        data:dataRemaining,
                        color: '#9384D1'
                    }
                ]}
                options={{
                    title:{
                        text:"Jenis POP",
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
                        categories:[' POP S-Backbone', 'POP Backbone', 'POP Distribusi', 'POP Akses', 'CPE PLN']
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