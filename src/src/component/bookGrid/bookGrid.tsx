import { Grid } from "@ui5/webcomponents-react";
import React from "react";

interface GridWrapperProps {
  children: React.ReactNode;
  slot: any
}
export const BookGrid: React.FunctionComponent<GridWrapperProps> = ({
  children,
  slot
}) => {
  return (
    <Grid data-testid="book-grid" slot={slot}>
      {children}
    </Grid>
  );
};
