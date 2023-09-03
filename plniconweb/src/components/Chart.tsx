import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {
    tipe: "Wilayah" | "Jenis" | "Health" | string;
    datachart: number[][];
}

function Chart({tipe, datachart} : ChartProps) {
    if (tipe === "Wilayah"){
        const data = {
          labels: ["HarJak", "HarBDB"],
          datasets: [
            {
              data: datachart[1],
              backgroundColor: ["#015CBA", "#FFA41B"],
            },
          ],
        };
        const options = {
          plugins: {
              legend: {
                  display: false
              }
          }
        };
      
        const textCenter = {
          id: 'textCenter',
          beforeDatasetsDraw(chart: { getDatasetMeta?: any; ctx?: any; data?: any; }) {
              const { ctx, data } = chart;
              if (data && data.datasets && data.datasets.length > 0 && data.datasets[0].data.length > 0) {
                const datasetMeta = chart.getDatasetMeta(0);
                if (datasetMeta && datasetMeta.data && datasetMeta.data.length > 0) {
                  const firstDataPoint = datasetMeta.data[0];
                  const x = firstDataPoint.x || 0;
                  const y = firstDataPoint.y || 0;
          
                  var total = data.datasets[0].data.reduce((sum: number, value: number) => sum + value, 0);
          
                  ctx.save();
                  ctx.font = 'bolder 65px sans-serif';
                  ctx.fillStyle = 'black';
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'middle';
                  ctx.fillText(total, x, y);
                }
              }
          }
        }
        return (
          <>
            <Doughnut className="z-0" data={data} options={options} plugins={[textCenter]}></Doughnut>
          </>
        );
    }

    else if (tipe === "Health"){
        const data = {
          labels: ["Handal", "Sehat", "Kritikal"],
          datasets: [
            {
              data: [3, 6, 1],
              backgroundColor: ["#1D7331", "#015CBA", "#BD1B1B"],
            },
          ],
        };
        const options = {
          plugins: {
              legend: {
                  display: false
              }
          }
        };
      
        const textCenter = {
          id: 'textCenter',
          beforeDatasetsDraw(chart: { getDatasetMeta?: any; ctx?: any; data?: any; }) {
            const { ctx, data } = chart;
            if (data && data.datasets && data.datasets.length > 0 && data.datasets[0].data.length > 0) {
              const datasetMeta = chart.getDatasetMeta(0);
              if (datasetMeta && datasetMeta.data && datasetMeta.data.length > 0) {
                const firstDataPoint = datasetMeta.data[0];
                const x = firstDataPoint.x || 0;
                const y = firstDataPoint.y || 0;
        
                var total = data.datasets[0].data.reduce((sum: number, value: number) => sum + value, 0);
        
                ctx.save();
                ctx.font = 'bolder 65px sans-serif';
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(total, x, y);
              }
            }
          }
        }
        return (
          <>
            <Doughnut className="z-0" data={data} options={options} plugins={[textCenter]}></Doughnut>
          </>
        );
    }

    else{
      const data = {
        labels: ["Shelter", "Ruang Kantor", "ODC", "Mini POP", "Micro POP", "OLT Gantung"],
        datasets: [
          {
            data: datachart[0],
            backgroundColor: ["#BD1B1B", "#015CBA", "#F8DB25", "#F266AB", "#9384D1", "#FFA41B"],
          },
        ],
      };
      const options = {
        plugins: {
            legend: {
                display: false
            }
        }
      };
    
      const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart: { getDatasetMeta?: any; ctx?: any; data?: any; }) {
            const { ctx, data } = chart;
            if (data && data.datasets && data.datasets.length > 0 && data.datasets[0].data.length > 0) {
              const datasetMeta = chart.getDatasetMeta(0);
              if (datasetMeta && datasetMeta.data && datasetMeta.data.length > 0) {
                const firstDataPoint = datasetMeta.data[0];
                const x = firstDataPoint.x || 0;
                const y = firstDataPoint.y || 0;
        
                var total = data.datasets[0].data.reduce((sum: number, value: number) => sum + value, 0);
        
                ctx.save();
                ctx.font = 'bolder 65px sans-serif';
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(total, x, y);
              }
            }
        }
      }
      return (
        <>
          <Doughnut className="z-0" data={data} options={options} plugins={[textCenter]}></Doughnut>
        </>
      );
  }

}

export default Chart;
