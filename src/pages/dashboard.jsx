import { useEffect, useState } from "react";
import Papa from "papaparse";
import codes from "../../public/countryCode";
import MainNav from "../components/mainNav";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  plugins,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dash({english, setEnglish}) {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("ALL");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("/data.csv")
      .then((response) => response.text())
      .then((csv) => {
        Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setData(results.data);
          },
        });
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (country === "ALL") {
      setFilteredData(data);
    } else {
      const filter = data.filter((row) => {
        const code = row["Alpha 3 Code"];
        return code === country;
      });
      setFilteredData(filter);
    }
  }, [country]);

  const barData = {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
    datasets: [
      {
        label: "Rivers CO2 Emissions (TgCO2)",
        data: filteredData.map((row) => {
          return row["Rivers (TgCO2)"];
        }),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Wood + Crop CO2 Emissions (TgCO2)",
        data: filteredData.map((row) => {
          return row["Wood+Crop (TgCO2)"];
        }),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
      {
        label: "Fossil Fuels CO2 Emissions (TgCO2)",
        data: filteredData.map((row) => {
          return row["FF (TgCO2)"];
        }),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  const barDataAr = {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
    datasets: [
      {
        label: "(TgCO2) انبعاثات ثاني أكسيد الكربون من الأنهار",
        data: filteredData.map((row) => {
          return row["Rivers (TgCO2)"];
        }),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "(TgCO2) انبعاثات ثاني أكسيد الكربون من قطع الأخشاب",
        data: filteredData.map((row) => {
          return row["Wood+Crop (TgCO2)"];
        }),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
      {
        label: "(TgCO2) انبعاثات ثاني أكسيد الكربون من الوقود الأحفوري",
        data: filteredData.map((row) => {
          return row["FF (TgCO2)"];
        }),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ]
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + " TgCO2"; 
          },
        },
        title: {
          display: true,
          text: "emissions",
        },
      },
      x: {
        title: {
          display: true,
          text: "year",
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "CO2 Emissions Sources",
      },
    },
  };

  const barOptionsAr = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + " TgCO2"; 
          },
        },
        title: {
          display: true,
          text: "انبعاثات",
        },
      },
      x: {
        title: {
          display: true,
          text: "سنة",
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "مصادر انبعاثات ثاني أكسيد الكربون",
      },
    },
  };

  return (
    <>
      <MainNav english={english} setEnglish={setEnglish} />

      <div id="dashboard">
        {
          (english)? <h1>Explore the yearly emissions of CO2 in your country</h1> : <h1>استكشف انبعاثات ثاني أكسيد الكربون السنوية في بلدك</h1>
        }
        

        <div className="selector-div">
          <select
            className="select-country"
            name="country"
            id="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            <option value="ALL">ALL</option>
            {codes.map((obj, index) => {
              return (
                <option value={obj.code} key={index}>
                  {(english)? obj.country : obj.country_ar}
                </option>
              );
            })}
          </select>
        </div>
        <br />
        <div>
          {country === "ALL" ? ( (english)?
            <h3 className="message">
              Please select a country to display charts
            </h3>
            :
            <h3 className="message">
              اختر دولة لرؤية الإحداثيات
            </h3>
          ) : (
            <div>
              <Bar options={(english)? barOptions : barOptionsAr} data={(english)? barData : barDataAr} />
            </div>
          )}
        </div>
        <div id="info">
          <h3>How to interpret the chart ?</h3>
          <ul className="info_list">
            <li>
              This barchart contains annual net fluxes of CO₂ on a 1-degree grid
              for a six-year period (2015-2020)
            </li>
            <li>
              The chart showcase: net carbon exchange (NCE), fossil fuel
              emissions (FF), and lateral fluxes due to crop trade, wood trade,
              and river export.
            </li>
            <li>
              Data is provided in units of grams of carbon dioxide per square
              meter per year (g CO₂/m2/yr)
            </li>
          </ul>
          <br />
          <br />
          <h3>important definitions</h3>
          <ul className="info_list">
            <li>
              This barchart contains annual net fluxes of CO₂ on a 1-degree grid
              for a six-year period (2015-2020)
            </li>
            <li>
              The chart showcase: net carbon exchange (NCE), fossil fuel
              emissions (FF), and lateral fluxes due to crop trade, wood trade,
              and river export.
            </li>
            <li>
              Data is provided in units of grams of carbon dioxide per square
              meter per year (g CO₂/m2/yr)
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dash;
