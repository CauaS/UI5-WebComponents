import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "@ui5/webcomponents-react";
import { BookCard } from "./bookCard";

describe("Should render BookCard", () => {
  it("Should render component", async () => {
    const cardClickCallBack = jest.fn()
    // eslint-disable-next-line testing-library/render-result-naming-convention
    render(
      <ThemeProvider>
        <BookCard
          author="author"
          categories="categories"
          onCardClick={() => cardClickCallBack()}
          title="title"
          year="year"
        />
      </ThemeProvider>
    );

    fireEvent.click(await screen.findByTestId("card"));
    expect(cardClickCallBack).toHaveBeenCalled();

    expect(await screen.findByTestId("card")).toBeInTheDocument();
  });
  it("Should call function on card click correctly", async () => {
    const cardClickCallBack = jest.fn()
    // eslint-disable-next-line testing-library/render-result-naming-convention
    render(
      <ThemeProvider>
        <BookCard
          author="author"
          categories="categories"
          onCardClick={() => cardClickCallBack(
            {
              author: "author",
              title: "title",
              year: 2021
            }
          )}
          title="title"
          year="year"
        />
      </ThemeProvider>
    );

    fireEvent.click(await screen.findByTestId("card"));

    expect(cardClickCallBack).toHaveBeenCalledWith({
      author: "author",
      title: "title",
      year: 2021
    });
  });
  it("Should show a hyphen when no data is passed", async () => {
    const cardClickCallBack = jest.fn()
    // eslint-disable-next-line testing-library/render-result-naming-convention
    render(
      <ThemeProvider>
        <BookCard
          author="author"
          categories="categories"
          onCardClick={() => cardClickCallBack(
            {
              author: "author",
              title: "title",
              year: 2021
            }
          )}
          title="title"
          year="year"
        />
      </ThemeProvider>
    );

    fireEvent.click(await screen.findByTestId("card"));

    expect(cardClickCallBack).toHaveBeenCalledWith({
      author: "author",
      title: "title",
      year: 2021
    });
  });
});
