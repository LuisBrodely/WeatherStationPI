import React, { useEffect, useState } from "react";
import { ref, onValue, DataSnapshot } from "firebase/database";
import database from "@/util/firebase";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

import { IoWaterOutline } from "react-icons/io5";
import { BiWater } from "react-icons/bi";
import { RiWindyLine } from "react-icons/ri";

import { SunIcon } from "@heroicons/react/24/outline";

import { WiDayCloudy, WiDayCloudyGusts, WiDayRainWind } from "react-icons/wi";

const TemperatureMeter: React.FC = () => {
  const [temperature, setTemperature] = useState<any>(0);

  const [comparation, setComparation] = useState<any>(0);

  useEffect(() => {
    const temperatureRef = ref(database, "datos_sensores");
    const unsubscribe = onValue(temperatureRef, (snapshot: DataSnapshot) => {
      const temperatureValue = snapshot.val()
      console.log(temperatureValue)
      const keys = Object.keys(temperatureValue);
      const lastKey = keys[keys.length - 1];
      const lastElement = temperatureValue[lastKey];
      //   console.log(lastElement);
      setTemperature(lastElement);

      const lastKey2 = keys[keys.length - 2];
      const lastElement2 = temperatureValue[lastKey2];
      //   console.log(lastElement2);
      setComparation(lastElement2);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <main className="flex-1">
        <div className="grid grid-cols-3">
          <div className="col-span-2 px-6 py-10">
            <h3 className="text-xl font-semibold pb-4">Resumen de hoy</h3>

            <section className="grid grid-cols-2 gap-4">
              
              <div className="bg-[#f8f8f8] flex p-6 rounded items-center">
                <IoWaterOutline size={60} color="#5FBFF9" />
                <div className="flex-1 ml-6">
                  <p className="text-base font-medium text-gray-400 mb-1">
                    Humedad
                  </p>
                  <h6 className="text-[#0B1E38] text-4xl font-semibold">
                    {temperature.humedad}%
                  </h6>
                </div>
                <div className="flex items-center">
                  {comparation.temperatura > temperature.temperatura ? (
                    <GoTriangleDown size={24} color="red" />
                  ) : (
                    <GoTriangleUp size={24} color="blue" />
                  )}
                  <h6 className="text-md font-medium ml-1">
                    {Math.abs(comparation.humedad - temperature.humedad)}%
                  </h6>
                </div>
              </div>

              <div className="bg-[#f8f8f8] flex p-6 rounded items-center">
                <RiWindyLine size={60} color="#16BAC5" />
                <div className="flex-1 ml-6">
                  <p className="text-base font-medium text-gray-400 mb-1">
                    Calidad del aire
                  </p>
                  <h6 className="text-[#0B1E38] text-4xl font-semibold">
                    95 AQY
                  </h6>
                </div>
                <div className="flex items-center">
                  <GoTriangleDown size={24} color="red" />
                  <h6 className="text-md font-medium ml-1">2 AQY</h6>
                </div>
              </div>

              <div className="bg-[#f8f8f8] flex p-6 rounded items-center">
                <BiWater size={60} color="#E86A92" />
                <div className="flex-1 ml-6">
                  <p className="text-base font-medium text-gray-400 mb-1">
                    Presion
                  </p>
                  <h6 className="text-[#0B1E38] text-3xl font-bold">
                    {temperature.presion} Pa
                  </h6>
                </div>
                <div className="flex items-center">
                  {comparation.presion > temperature.presion ? (
                    <GoTriangleDown size={24} color="red" />
                  ) : (
                    <GoTriangleUp size={24} color="blue" />
                  )}
                  <h6 className="text-md font-medium ml-1">
                    {Math.abs(comparation.presion - temperature.presion)} Pa
                  </h6>
                </div>
              </div>

              <div className="bg-[#f8f8f8] flex p-6 rounded items-center">
                <SunIcon width={60} color="#F7DF1E" />
                <div className="flex-1 ml-6">
                  <p className="text-base font-medium text-gray-400 mb-1">
                    Temperatura
                  </p>
                  <h6 className="text-[#0B1E38] text-4xl font-semibold">
                    {temperature.temperatura}°C
                  </h6>
                </div>
                <div className="flex items-center">
                  {comparation.temperatura > temperature.temperatura ? (
                    <GoTriangleDown size={24} color="red" />
                  ) : (
                    <GoTriangleUp size={24} color="blue" />
                  )}
                  <h6 className="text-md font-medium ml-1">
                    {Math.abs(
                      comparation.temperatura - temperature.temperatura
                    )}
                    °C
                  </h6>
                </div>
              </div>
            </section>

            <h3 className="text-xl font-semibold py-10">Graficas</h3>
          </div>
          <div className="bg-[#101010] px-8 py-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-white font-medium text-xl mb-1">
                  Tuxtla Gutierrez
                </h3>
                <h3 className="text-gray-400 font-medium text-base">Chiapas</h3>
              </div>
              <h4 className="text-white font-medium text-lg">1:50 AM</h4>
            </div>
            <WiDayCloudy size={140} color="#4F46E5" />
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium text-6xl mb-2">
                  {temperature.temperatura}°C
                </h3>
                <h3 className="text-gray-400 font-medium text-base">
                  Temperatura
                </h3>
              </div>
              <h4 className="text-white font-medium text-lg">Dia soleado</h4>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TemperatureMeter;
