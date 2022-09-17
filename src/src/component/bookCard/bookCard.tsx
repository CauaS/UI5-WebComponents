import { Card, CardHeader } from "@ui5/webcomponents-react";
import React from "react";
import { BookClassification, CardBody } from '..';

interface BookCardProps {
  title: string;
  author: string;
  categories: string;
  year: string;
  onCardClick: () => void
}

const Header = ({
  year, title, author
}: Pick<BookCardProps, "year" | "title" | "author">) => {
  return (
    <CardHeader
      status={year}
      titleText={title}
      subtitleText={author}
      style={{ width: "300px" }}
    ></CardHeader>
  );
};

export const BookCard: React.FunctionComponent<BookCardProps> = ({
  categories, author, title, year, onCardClick
}) => {
  
  return (
    <Card
      data-testid="card"
      header={
        <Header 
          author={author} 
          title={title} 
          year={year}
        />
      }
      onClick={() => onCardClick()}
    >
      <CardBody>
        <BookClassification 
          classifications={categories.split(',')}
        />
      </CardBody>
    </Card>
  );
};
