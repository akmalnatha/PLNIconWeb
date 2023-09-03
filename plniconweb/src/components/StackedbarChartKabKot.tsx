import Chart from 'react-apexcharts';

interface StackedBarChartProps {
    dataLabel: string[];
    dataPlan: number[];
    dataRealisasi: number[];
}

function StackedbarChart({dataLabel, dataPlan, dataRealisasi}: StackedBarChartProps){
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
                        data:dataPlan,
                        color:'#09AEEF'
                    },
                    {
                        name:"On Schedule",
                        data:dataRealisasi,
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
                        categories: dataLabel,
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