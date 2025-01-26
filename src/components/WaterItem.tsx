import React, { useEffect, useState } from "react";
import { CheckIcon } from "../assets/icons";
import Button from "./Button";
import { WaterItemProps } from "../lib/Types";
import {
  handleWaterChange,
  getStatusClasses,
  formatWaterConsumed,
} from "../lib/Functions";

const WaterItem = ({ onWaterConsumed }: WaterItemProps) => {
  const [waterConsumed, setWaterConsumed] = useState(0);

  useEffect(() => {
    onWaterConsumed(waterConsumed);
  }, [waterConsumed, onWaterConsumed]);

  return (
    <div className="flex justify-between items-end">
      <div className="flex flex-col gap-[1px]">
        <div
          className={`flex bg-opacity-10 w-[130px] items-center my-2 gap-2 px-2 py-2 text-sm rounded-lg 
        ${getStatusClasses(waterConsumed, 500)} 
      `}
        >
          <label
            className={`transition relative bg-opacity-100 flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses(
              waterConsumed,
              500
            )}`}
          >
            <input
              type="checkbox"
              checked={waterConsumed >= 500}
              className="absolute h-full w-full cursor-pointer opacity-0"
              onChange={() => {}}
            />
            {waterConsumed >= 500 && <CheckIcon />}
          </label>
          <div className="flex w-10 justify-between">
            <div className="flex w-10 flex-col items-end">
              <div className="flex w-10 gap-2">
                <Button
                  onClick={() =>
                    handleWaterChange(500, setWaterConsumed, onWaterConsumed)
                  }
                  color="ghost"
                >
                  500ml
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex bg-opacity-10 w-[130px] items-center my-2 gap-2 px-2 py-2 text-sm rounded-lg 
        ${getStatusClasses(waterConsumed, 1000)} 
      `}
        >
          <label
            className={`transition relative bg-opacity-100 flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses(
              waterConsumed,
              1000
            )}`}
          >
            <input
              type="checkbox"
              checked={waterConsumed >= 1000}
              className="absolute h-full w-full cursor-pointer opacity-0"
              onChange={() => {}}
            />
            {waterConsumed >= 1000 && <CheckIcon />}
          </label>
          <div className="flex w-10 justify-between">
            <div className="flex w-10 flex-col items-end">
              <div className="flex w-10 gap-2">
                <Button
                  className="whitespace-nowrap"
                  onClick={() =>
                    handleWaterChange(1000, setWaterConsumed, onWaterConsumed)
                  }
                  color="ghost"
                >
                  1 litro
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex bg-opacity-10 w-[130px] items-center my-2 gap-2 px-2 py-2 text-sm rounded-lg 
        ${getStatusClasses(waterConsumed, 1500)} 
      `}
        >
          <label
            className={`transition relative bg-opacity-100 flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses(
              waterConsumed,
              1500
            )}`}
          >
            <input
              type="checkbox"
              checked={waterConsumed >= 1500}
              className="absolute h-full w-full cursor-pointer opacity-0"
              onChange={() => {}}
            />
            {waterConsumed >= 1500 && <CheckIcon />}
          </label>
          <div className="flex w-10 justify-between">
            <div className="flex w-10 flex-col items-end">
              <div className="flex w-10 gap-2">
                <Button
                  className="whitespace-nowrap"
                  onClick={() =>
                    handleWaterChange(1500, setWaterConsumed, onWaterConsumed)
                  }
                  color="ghost"
                >
                  1.5 litros
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex bg-opacity-10 w-[130px] items-center my-2 gap-2 px-2 py-2 text-sm rounded-lg 
        ${getStatusClasses(waterConsumed, 2000)} 
      `}
        >
          <label
            className={`transition relative bg-opacity-100 flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses(
              waterConsumed,
              2000
            )}`}
          >
            <input
              type="checkbox"
              checked={waterConsumed >= 2000}
              className="absolute h-full w-full cursor-pointer opacity-0"
              onChange={() => {}}
            />
            {waterConsumed >= 2000 && <CheckIcon />}
          </label>
          <div className="flex w-10 justify-between">
            <div className="flex w-10 flex-col items-end">
              <div className="flex w-10 gap-2">
                <Button
                  className="whitespace-nowrap"
                  onClick={() =>
                    handleWaterChange(2000, setWaterConsumed, onWaterConsumed)
                  }
                  color="ghost"
                >
                  2 litros
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex bg-opacity-10 w-[130px] items-center my-2 gap-2 px-2 py-2 text-sm rounded-lg 
        ${getStatusClasses(waterConsumed, 2500)} 
      `}
        >
          <label
            className={`transition relative bg-opacity-100 flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses(
              waterConsumed,
              2500
            )}`}
          >
            <input
              type="checkbox"
              checked={waterConsumed >= 500}
              className="absolute h-full w-full cursor-pointer opacity-0"
              onChange={() => {}}
            />
            {waterConsumed >= 2500 && <CheckIcon />}
          </label>
          <div className="flex w-10 justify-between">
            <div className="flex w-10 flex-col items-end">
              <div className="flex w-10 gap-2">
                <Button
                  className="whitespace-nowrap"
                  onClick={() =>
                    handleWaterChange(2500, setWaterConsumed, onWaterConsumed)
                  }
                  color="ghost"
                >
                  2.5 litros
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <p className="text-xl font-semibold text-brand-primary">
          {formatWaterConsumed(waterConsumed)}
        </p>
        <p className="text-xl font-semibold">/2.5 Litros</p>
      </div>
    </div>
  );
};

export default WaterItem;
