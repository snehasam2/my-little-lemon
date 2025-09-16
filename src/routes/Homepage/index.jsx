import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";

import { TopPicks } from "../../shared/TopPicks";
import { fetchMockApiData } from "../../utilities/fetchMockApiData";
import { Skeleton } from "../../shared/Skeleton";

export const HomePage = () => {
  const [topPicksData, setTopPicksData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopPicksData = async () => {
      const response = await fetchMockApiData("forTopPicks");
      if (response) setTopPicksData(response);
    };
    fetchTopPicksData();
  }, []);

  const bookTableHandler = () => {
    navigate("/reservation");
  };

  return (
    <section className="homepage" aria-label="Home Page">
      <div>
        <h2 id="top-picks-heading">Top picks for the day</h2>
        <NavLink to={"/menu"} aria-label="Explore more menu items">
          Explore More
        </NavLink>
      </div>

      <div className="mobile" aria-labelledby="top-picks-heading">
        {topPicksData.length ? (
          topPicksData.map(({ imgUrl, badgeTitle }) => (
            <TopPicks imgUrl={imgUrl} badgeTitle={badgeTitle} key={imgUrl} />
          ))
        ) : (
          <>
            <Skeleton style={{ width: "280px", height: "320px" }} />
            <Skeleton style={{ width: "280px", height: "320px" }} />
            <Skeleton style={{ width: "280px", height: "320px" }} />
          </>
        )}
      </div>

      <div
        className="homepage-book-table-section"
        aria-label="Book a table section"
      >
        <h2>Discover Flavors from Around the World</h2>
        <p>
          Explore a whole range of cuisines and satisfy your cravings. Whether
          you want to dine in or enjoy a meal at home, we’ve got you covered.
        </p>
        <button onClick={bookTableHandler} aria-label="Book a table now">
          Book a table
        </button>
      </div>
    </section>
  );
};
