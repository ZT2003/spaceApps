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

function Dash({ english, setEnglish }) {
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
    ],
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
        {english ? (
          <h1>Explore the yearly emissions of CO2 in your country</h1>
        ) : (
          <h1 className="arabic">
            استكشف انبعاثات ثاني أكسيد الكربون السنوية في بلدك
          </h1>
        )}

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
                  {english ? obj.country : obj.country_ar}
                </option>
              );
            })}
          </select>
        </div>
        <br />
        <div>
          {country === "ALL" ? (
            english ? (
              <h3 className="message">
                Please select a country to display charts
              </h3>
            ) : (
              <h3 className="message arabic">اختر دولة لرؤية الإحداثيات</h3>
            )
          ) : (
            <div>
              <Bar
                options={english ? barOptions : barOptionsAr}
                data={english ? barData : barDataAr}
              />
            </div>
          )}
        </div>
        {english ? (
          <div id="info">
            <h3>How to interpret the chart ?</h3>
            <ul className="info_list">
              <li>
                This barchart contains annual net fluxes of CO₂ on a 1-degree
                grid for a six-year period (2015-2020)
              </li>
              <li>
                The chart showcase: net carbon exchange (NCE), fossil fuel
                emissions (FF), and lateral fluxes due to crop trade, wood
                trade, and river export.
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
                <b>Greenhouse Gasses (GHGs):</b> gasses in the atmosphere that
                trap heat from the Sun.
              </li>
              <li>
                <b> Fossil Fuel:</b> Any hydrocarbon (chemical containing only
                carbon and hydrogen) deposit that can be burned for heat or
                power, such as petroleum, coal, and natural gas.
              </li>
              <li>
                <b>Carbon Dioxide (CO2): </b>A naturally occurring gas, CO2 is
                also a byproduct of burning fossil fuels (such as oil, gas, and
                coal), of burning biomass, of land-use changes (LUCs) and of
                industrial processes (e.g., cement production). It is the main
                gas contributing to climate change.
              </li>
              <li>
                <b> GHG Source:</b> Something that releases a greenhouse gas
                into the atmosphere. For example, the burning of fossil fuels is
                a source of GHG emissions.
              </li>
              <li>
                <b> GHG Sink:</b> Something that removes a greenhouse gas from
                the atmosphere. For example, plants—through
                photosynthesis—transform carbon dioxide in the air into organic
                matter, which either stays in the plants or is stored in the
                soils. Thus, plants are a sink for carbon dioxide.
              </li>
              <li>
                <b> Global Carbon Budget:</b> the assessment of global carbon
                sources and sinks, and the resulting change in atmospheric CO2
                concentration.
              </li>
              <li>
                <b>Total Carbon Budget:</b> the maximum amount of net global
                human-caused CO2 emissions that would result in limiting global
                warming to a given level.
              </li>
              <li>
                <b> Lateral Fluxes:</b> the flow of carbon between different
                types of sources and sinks (e.g., lateral flow of agricultural
                products from growth to consumption, riverine transport of soil
                carbon from land to ocean systems).
              </li>
            </ul>
          </div>
        ) : (
          <div id="info" className="arabic">
            <h3>كيف يمكن قراءة الرسم البياني؟</h3>
            <ul className="info_list">
              <li>
                هذا الرسم البياني يبين الانبعاثات السنوية لثاني أكسيد الكربون
                على مدى ست سنوات(2015-2020)
              </li>
              <li>
                الرسم يظهر الانبعاثات من عدة مصادر: الأنهار، قطع الأخشاب،
                والوقود الأحفوري
              </li>
              <li>
                البيانات تظهر بوحدة قرام من ثاني أكسيد الكربون لكل متر مربع لكل
                سنة (g CO₂/m2/yr)
              </li>
            </ul>
            <br />
            <br />
            <h3>مصطلحات مهمة</h3>
            <ul className="info_list">
              <li>
                <b>الغازات الدفيئة(GHGs):</b>
                غازات في الغلاف الجوي تحبس الحرارة القادمة من الشمس
              </li>
              <li>
                <b> الوقود الأحفوري:</b>
                أي مركب كيميائي يحتوي على عناصر الكربون والهيدروجين فقط ويتم
                حرقه للحصول على الطاقة؛ مثل البترول،الفحم، والغاز الطبيعي
              </li>
              <li>
                <b>ثاني أكسيد الكربون (CO2): </b>
                غاز طبيعي، وقد ينتج من حرق الوقود الأحفوري، حرق الكتلة الحيوية،
                تغيير معالم الأرض، والنشاطات الصناعية (مثل إنتاج السمنت). وهو
                المسبب الأساسي للاحتباس الحراري
              </li>
              <li>
                <b> مصادر الغازات الدفيئة:</b>
                أي شيء يطلق الغازات الدفيئة في الغلاف الجوي؛ مثل حرق
                الوقودالأحفوري
              </li>
              <li>
                <b> مصرف للغازات الدفيئة:</b>
                أي شيء يمتص غاز دفيء من الغلاف الجوي؛ مثل عملية البناء الضوئي
                التي تقوم بها النباتات، حيث تحول ثاني أكسيد الكربون إلى مواد
                عضوية تبقى في النبات أو تتخزن في التربة. فالنباتات مصرف لثاني
                أكسيد الكربون
              </li>
              <li>
                <b> ميزانية الكربون العالمية:</b>
                دراسة المصادر والمصارف العالمية للكربون، والتغيرات الناتجة
                لتركيز ثاني أكسيد الكربون في الغلاف الجوي
              </li>
              <li>
                <b>ميزانية الكربون الكلية:</b>
                أكبر مقدار من انبعاثات ثاني أكسيد الكربون الكلية من نشاطات
                بشرية، والذي سيحدد الاحتباس الحراري لمستوى معين
              </li>
              <li>
                <b> التدفقات الأفقية:</b>
                دورة الكربون بين المصادر والمصارف المختلفة، مثل الزراعة من النمو
                لحد الاستهلاك، ونقل الأنهار للكربون الترابي من اليابسة للمحيط
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Dash;
