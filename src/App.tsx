import { Bar, FCLLayout, FlexibleColumnLayout, Label, Page, ShellBar } from "@ui5/webcomponents-react";
import { useState } from "react";
import { BookCard, BookDetail, BookGrid } from "./src/component";
import books from './src/data/books.json';

function App() {
  const [layout, setLayout] = useState<FCLLayout>(FCLLayout.OneColumn);
  const [selectedBook, setSelectedBook] = useState({});

  const handleBooksDetail = (book: any) => {
    setSelectedBook(book)
    setLayout(FCLLayout.TwoColumnsMidExpanded)
  }

  const closeBookDetail = () => {
    setLayout(FCLLayout.OneColumn);
  }

  const StartColumn = (props: any) => {
    return (
      <BookGrid 
        slot={props.slot}
        data-testid="book-grid"
      >
        {
          books.map((book: any) => (
              <BookCard
                key={book.id}
                author={book.author}
                title={book.title}
                year={book.year}
                categories={book.categories}
                onCardClick={() => handleBooksDetail(book)}
              />
          ))
        }
      </BookGrid>
    )
  }

  const MidColumn = (props: any) => {
    return (
      <BookDetail {...props} handleClose={closeBookDetail} data={selectedBook}/>
    )
  }

  return (
    <>
      <ShellBar
        secondaryTitle="Virtual Library"
      />
      <Page
        header={<Bar><Label>Books</Label></Bar>}
        style={{
          height: '90vh',
        }}
      >
        <FlexibleColumnLayout
          style={{
            height: '90vh',
            width: '100%'
          }}
          layout={layout}
          midColumn={<MidColumn />}
          startColumn={<StartColumn />}
        />
      </Page>
    </>
  );
}

export default App;
