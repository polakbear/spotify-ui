import { Radar } from 'react-chartjs-2';
import { useAudioFeaturesQuery } from '../generated/graphql';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

interface AudioAnalysisProps {
  id: string;
}
export const AudioAnalysis = ({ id }: AudioAnalysisProps) => {
  const { data, loading, error } = useAudioFeaturesQuery({
    variables: {
      id: id,
    },
  });

  if (loading) {
    return <>loading</>;
  }

  if (error) {
    return <>boo!</>;
  }
  if (!data) {
    return <>no audio features found</>;
  }

  const skip = ['tempo', 'duration_ms', '__typename__'];
  const dataValues = [];
  const dataLabels = [];
  for (const [key, value] of Object.entries(data.audioFeatures)) {
    if (!skip.includes(key) && value !== 'AudioFeatures') {
      dataLabels.push(key);
      dataValues.push(value * 100);
    }
  }

  const chartData = {
    labels: dataLabels,
    datasets: [
      {
        label: 'audio analysis',
        data: dataValues,
        fill: true,
        borderWidth: 1,
        backgroundColor: 'rgba(30, 215, 96, 0.3)',
        borderColor: 'rgb(30, 215, 96)',
        // border: '1px solid rgb(30, 215, 96)',
        pointBackgroundColor: 'rgb(30, 215, 96)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(30, 215, 96)',
      },
    ],
  };
  return <Radar data={chartData} />;
};
