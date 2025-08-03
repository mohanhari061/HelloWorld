import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement,
	Tooltip,
	Filler,
	ArcElement,
	Legend,
} from "chart.js";
import { orange, orangeLight, purple, purpleLight } from "../../constants/color";
import { getLast7days } from "../../lib/features";

ChartJS.register(
	LinearScale,
	CategoryScale,
	PointElement,
	LineElement,
	Tooltip,
	Filler,
	ArcElement,
	Legend
);

const labels = getLast7days();

const LineChartOptions = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: false,
		},
	},
	scales: {
		x: {
			grid: {
				display: false,
			},
		},
		y: {
			beginAtZero: true,
			grid: {
				display: false,
			},
		},
	},
};

const LineChart = ({ value = [] }) => {
	const data = {
		labels: labels,
		datasets: [
			{
				label: "My First Dataset",
				data: value,
				fill: true,
				backgroundColor: purpleLight,
				borderColor: purple,
				tension: 0.1,
			},
		],
	};

	return <Line data={data} options={LineChartOptions} />;
};

const DoughnutChartOptions = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: false,
		},
	},
	cutout:120
};
const DoughnutChart = ({ value = [], labels = [] }) => {
	const data = {
		labels,
		datasets: [
			{
				label: "Total chats vs group chats",
				data: value,
				backgroundColor: [purpleLight, orangeLight],
				borderColor: [purple, orange],
				offset:25
			},
		],
	};
	return <Doughnut style={{
		zIndex:10,
	}}  data={data} options={DoughnutChartOptions} />;
};

export { LineChart, DoughnutChart };
