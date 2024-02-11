import React from "react";
import { Heading5 } from "../../../common";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Sort = ({ styles }) => {
  const {t} = useTranslation();
  return (
    <div className={`${styles}`}>
      <div className="flex gap-[37px]">
        <NavLink
          to="/"
          className={"text-black dark:text-grey-2 text font-normal flex items-center"}
        >
          {t("allPlants")}
        </NavLink>
        <NavLink
          to="/new"
          className={"text-black dark:text-grey-2 text font-normal flex items-center"}
        >
          {t("newArrivals")}
        </NavLink>
        <NavLink
          to="/sale"
          className={"text-black dark:text-grey-2 text font-normal flex items-center"}
        >
          {t("sale")}
        </NavLink>
      </div>
      <div>
        <Heading5 styles="text-black  dark:text-grey-2 text-3">
          Short by: Default sorting
        </Heading5>
      </div>
    </div>
  );
};
