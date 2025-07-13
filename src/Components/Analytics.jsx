import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { Bar } from 'react-chartjs-2';

const Analytics = () => {
  const { token, signIn } = useContext(AuthContext);
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    if (!token) return;

    const fetchAnalytics = async () => {
      try {
        const response = await fetch(
          `https://youtubeanalytics.googleapis.com/v2/reports?` +
            new URLSearchParams({
              ids: 'channel==MINE',
              startDate: '2025-06-01',
              endDate: '2025-06-30',
              metrics: 'views,likes,comments',
              dimensions: 'month',
              sort: 'month',
            }),
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        console.log('Analytics:', data);

        if (data.rows) {
          const months = data.rows.map((row) => row[0]);
          const views = data.rows.map((row) => row[1]);
          const likes = data.rows.map((row) => row[2]);
          const comments = data.rows.map((row) => row[3]);

          setAnalyticsData({
            months,
            views,
            likes,
            comments,
          });
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchAnalytics();
  }, [token]);

  if (!token) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4 dark:text-gray-100">YouTube Analytics</h1>
        <p className="mb-4 dark:text-gray-100">You must sign in to view analytics.</p>
        <button
          onClick={signIn}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  if (!analyticsData) {
    return <div className="p-8">Loading analytics...</div>;
  }

  const barData = {
    labels: analyticsData.months,
    datasets: [
      {
        label: 'Views',
        data: analyticsData.views,
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
      {
        label: 'Likes',
        data: analyticsData.likes,
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
      },
      {
        label: 'Comments',
        data: analyticsData.comments,
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
      },
    ],
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8 text-gray-800">YouTube Analytics</h1>
      <div className="bg-white p-6 rounded shadow">
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default Analytics;
