
import React, { PropsWithChildren } from "react";
import bulletholes from "../../assets/imgs/bullet-hole-min.png"

interface Iprops extends PropsWithChildren {
  numbers?: number;
}

export const BulletHole = ({
  numbers = 5,
}: Iprops) => {
  return (
    <div className="bulletHole-holder">
      {[...Array(numbers)].map((hole) => {
        return <img className="hole-img" src={bulletholes} alt="Bullet-hole" />
      })}
    </div>
  );
};
