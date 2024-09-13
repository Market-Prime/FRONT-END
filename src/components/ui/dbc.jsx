import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Mapping of paths to breadcrumb names
const breadcrumbNameMap = {
  "/": "Home",
  "/category": "Category",
  "/category/womens-wears": "Women’s wears",
  "/category/womens-wears/dinner-dress": "Dinner dress",
  "/product/plain-color-slit-off-shoulder-dress":
    "Plain color Slit Off Shoulder Dress",
};

const DynamicBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); // Filter empty strings

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Render Home link */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* Loop through path segments to generate breadcrumbs */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={to}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {!isLast ? (
                  <BreadcrumbLink asChild>
                    <Link to={to}>{breadcrumbNameMap[to]}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbLink asChild>
                    <span className="truncate">{breadcrumbNameMap[to]}</span>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumbs;
