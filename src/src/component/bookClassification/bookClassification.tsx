import { Badge } from "@ui5/webcomponents-react";
import React from "react";

interface BookClassificationProps {
  classifications: string[];
}
export const BookClassification: React.FunctionComponent<
  BookClassificationProps
> = ({ classifications }) => {
  return (
    <>
      {classifications.map((classification: string) => (
        <Badge
          data-testid="badge"
          key={classification}
          colorScheme="1"
          style={{ marginRight: 5 }}
        >
          {classification}
        </Badge>
      ))}
    </>
  );
};
