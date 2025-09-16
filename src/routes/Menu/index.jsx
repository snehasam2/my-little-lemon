import React from "react";
import { fetchMockApiData } from "../../utilities/fetchMockApiData"; // fixed import
import { MenuCard } from "../../shared/MenuCard";
import { Skeleton } from "../../shared/Skeleton";

export const Menu = () => {
  const [menuItems, setMenuItems] = React.useState([]);

  React.useEffect(() => {
    const fetchMenuItems = async () => {
      const result = await fetchMockApiData("forMenuItems");
      setMenuItems(result);
    };
    fetchMenuItems();
  }, []);

  return (
    <section className="menu" aria-label="Menu section">
      <h2 id="menu-heading">Explore our menu</h2>

      <div aria-labelledby="menu-heading" className="menu-items">
        {menuItems.length ? (
          menuItems.map(({ imgUrl, title, description }) => (
            <MenuCard
              imgUrl={imgUrl}
              title={title}
              description={description}
              key={title}
            />
          ))
        ) : (
          <Skeleton
            style={{ width: "280px", height: "520px", marginRight: "16px" }}
            aria-label="Loading menu item"
          />
        )}
      </div>
    </section>
  );
};
