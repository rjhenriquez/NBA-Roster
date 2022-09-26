import React from "react";
import Image from "next/image";

const PlayerCard = (props) => {
  return (
    <li className="font-roboto shadow-md rounded flex flex-col bg-white">
      <div className="relative overflow-hidden">
        <div
          className="h-96 w-96 absolute bg-contain bg-no-repeat -top-3/4 -bottom-3/4 -left-12 grayscale opacity-10"
          style={{
            backgroundImage: `url(${props.logo})`,
          }}
        ></div>
        <div className="absolute top-2 right-2 w-12">
          <Image
            layout="intrinsic"
            width={150}
            height={150}
            src={props.logo}
            alt={`${props.team} logo`}
          />
        </div>
        <div className="flex flex-row relative z-1">
          <div className="basis-1/2 grid justify-items-center">
            <Image
              layout="intrinsic"
              width={260}
              height={190}
              src={props.headImage}
              alt={`${props.firstName} ${props.lastName} headshot`}
            />
          </div>
          <div className="basis-1/2 flex flex-col justify-center">
            <div className="text-gray-400 font-medium text-xs">
              #{props.number} | {props.position}
            </div>
            <div className="text-lg leading-6 font-bold">
              {props.firstName} <br /> {props.lastName}
            </div>
          </div>
        </div>
      </div>
      <div
        className="box-content h-1.5"
        style={{ backgroundColor: `${props.teamColor}` }}
      ></div>
      <div className="flex flex-row leading-none">
        <div className="basis-1/3 py-1 text-center">
          <div className="text-sm">PPG</div>
          <div className="text-lg leading-none font-bold">{props.ppg}</div>
        </div>
        <div className="basis-1/3 py-2 border-x-2 border-gray-100 text-center">
          <div className="text-sm">RPG</div>
          <div className="text-lg leading-none font-bold">{props.rpg}</div>
        </div>
        <div className="basis-1/3 py-1 text-center">
          <div className="text-sm">APG</div>
          <div className="text-lg leading-none font-bold">{props.apg}</div>
        </div>
      </div>
    </li>
  );
};

export default PlayerCard;
