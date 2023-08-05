import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartProps {
    tipe: "Wilayah" | "Jenis" | "Health" | string
}

function Chart({tipe} : ChartProps) {
    if (tipe === "Wilayah"){
        const data = {
          labels: ["HarJak", "HarBDB"],
          datasets: [
            {
              data: [3, 6],
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
              var total=0;
              for(let i = 0; i<data.datasets[0].data.length; i++){
                total += data.datasets[0].data[i]
                console.log(total);
              }
      
              ctx.save()
              ctx.font = `bolder 65px sans-serif`;
              ctx.fillStyle = 'black';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText(total, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
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
            var total=0;
            for(let i = 0; i<data.datasets[0].data.length; i++){
              total += data.datasets[0].data[i]
            }
      
              ctx.save()
              ctx.font = 'bolder 65px sans-serif';
              ctx.fillStyle = 'black';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText(total, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
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
            data: [3, 6, 1, 2, 3, 8],
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
            var total=0;
            for(let i = 0; i<data.datasets[0].data.length; i++){
              total += data.datasets[0].data[i]
            }

    
            ctx.save()
            ctx.font = 'bolder 65px sans-serif';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(total, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
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
