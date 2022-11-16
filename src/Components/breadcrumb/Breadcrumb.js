import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbItem from "./BreadcrumbItem";

function Breadcrumb({ maxItems, routes, separator }) {
  return (
    <Breadcrumbs maxItems={maxItems} separator={separator}>
      {routes.map((route) => (
        <BreadcrumbItem
          key={route.label}
          label={route.label}
          icon={route.icon}
          to={route.to}
        />
      ))}
    </Breadcrumbs>
  );
}

export default Breadcrumb;
