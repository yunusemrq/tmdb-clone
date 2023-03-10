import Image from "next/image";
import React from "react";
import { CategoryBar, MovieCard } from "../common";

interface IWiderMovies {
  background?: Boolean;
}

const WiderMovies = (props: IWiderMovies) => {
  const { background } = props;
  const trendPaths = [
    {
      id: 1,
      title: "Trend",
      isActive: true,
    },
    {
      id: 2,
      title: "ThisWeek",
      isActive: false,
    },
  ];
  return (
    <div className="bg-white">
      <section className="container relative pt-[30px] z-10">
        <CategoryBar title="Trending" path={trendPaths} />
        {background && (
          <Image
            className="absolute bottom-0 -z-10"
            src="/images/wider-bg.svg"
            width={1400}
            height={200}
            alt=""
          />
        )}
        <div className="wider-shadow" />
        <div className="h-full flex items-center px-10 gap-x-5 overflow-x-auto pt-4 pb-12">
          {new Array(12).fill(<MovieCard />)}
        </div>
      </section>
    </div>
  );
};

export default WiderMovies;
