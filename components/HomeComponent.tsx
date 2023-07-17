import React, { useEffect, useState } from "react";
import { ref, onValue, DataSnapshot } from "firebase/database";
import database from "@/util/firebase";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

import { IoWaterOutline } from "react-icons/io5";
import { BiWater } from "react-icons/bi";
import { RiWindyLine } from "react-icons/ri";

import { SunIcon } from "@heroicons/react/24/outline";

import { WiDayCloudy, WiDayCloudyGusts, WiDayRainWind } from "react-icons/wi";
const HomeComponent = () => {
  const [temperature, setTemperature] = useState<any>(0);

  const [comparation, setComparation] = useState<any>(0);

  useEffect(() => {
    const temperatureRef = ref(database, "datos_sensores");
    const unsubscribe = onValue(temperatureRef, (snapshot: DataSnapshot) => {
      const temperatureValue = snapshot.val();
      console.log(temperatureValue);
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
    <div className="p-0 grid grid-cols-2 grid-rows-2 gap-3 h-96">
      <div className="bg-[#D2BA89] flex p-8 rounded items-center">
        <IoWaterOutline size={60} color="white" />
        <div className="flex-1 ml-4">
          <p className="text-base font-medium text-gray-200 mb-1">Humedad</p>
          <h6 className="text-white text-4xl font-semibold">
            {temperature.humedad}29%
          </h6>
        </div>
        <div className="flex items-center">
          {comparation.temperatura > temperature.temperatura ? (
            <GoTriangleDown size={24} color="#D8876F" />
          ) : (
            <GoTriangleUp size={24} color="#C95B38" />
          )}
          <h6 className="text-md font-medium ml-1 text-gray-200">
            {Math.abs(comparation.humedad - temperature.humedad)}%
          </h6>
        </div>
      </div>
      <div className="bg-[#886B59] flex p-8 rounded items-center">
        <RiWindyLine size={60} color="white" />
        <div className="flex-1 ml-4">
          <p className="text-base font-medium text-gray-200 mb-1">
            Calidad del aire
          </p>
          <h6 className="text-white text-4xl font-semibold">95 AQY</h6>
        </div>
        <div className="flex items-center">
          <GoTriangleDown size={24} color="#D8876F" />
          <h6 className="text-md font-medium ml-1 text-gray-200">2 AQY</h6>
        </div>
      </div>
      <div className="bg-[#A0472C] flex p-8 rounded items-center">
        <BiWater size={60} color="white" />
        <div className="flex-1 ml-4">
          <p className="text-base font-medium text-gray-200 mb-1">Presion</p>
          <h6 className="text-white text-4xl font-bold">
            {temperature.presion}5402 Pa
          </h6>
        </div>
        <div className="flex items-center">
          {comparation.presion > temperature.presion ? (
            <GoTriangleDown size={24} color="#D8876F" />
          ) : (
            <GoTriangleUp size={24} color="#C95B38" />
          )}
          <h6 className="text-md font-medium ml-1 text-gray-200">
            {Math.abs(comparation.presion - temperature.presion)} Pa
          </h6>
        </div>
      </div>

      <div className="bg-[#402923] flex p-8 rounded items-center">
        <SunIcon width={60} color="white" />
        <div className="flex-1 ml-4">
          <p className="text-base font-medium text-gray-200 mb-1">
            Temperatura
          </p>
          <h6 className="text-white text-4xl font-semibold">
            {temperature.temperatura}29°C
          </h6>
        </div>
        <div className="flex items-center">
          {comparation.temperatura > temperature.temperatura ? (
            <GoTriangleDown size={24} color="#D8876F" />
          ) : (
            <GoTriangleUp size={24} color="#C95B38" />
          )}
          <h6 className="text-md font-medium ml-1 text-gray-200">
            {Math.abs(comparation.temperatura - temperature.temperatura)}
            °C
          </h6>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
