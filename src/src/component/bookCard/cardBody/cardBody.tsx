import React from "react";

const contentStyle = {
  paddingTop: 0, 
  paddingBottom: 10,
  paddingLeft: 15,
  paddingRight: 10
}

interface BookCardProps {
  children: React.ReactNode
}

export const CardBody: React.FunctionComponent<BookCardProps> = ({
  children
}) => {
  return (
    <div style={contentStyle}>
      {children}
    </div>  
  );
};
