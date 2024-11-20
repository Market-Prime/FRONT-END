import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils"; // Utility function

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

// Define PropTypes for props validation
Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: "text", // Default value for type
};

export { Input };
