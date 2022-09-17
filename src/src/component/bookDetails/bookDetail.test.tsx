import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@ui5/webcomponents-react";
import { BookDetail } from "./bookDetails";
window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
    }));
describe("Should render BookCard", () => {
  it("Should render component", async () => {
    render(
      <ThemeProvider>
        <BookDetail
            data={{
                title: "title",
                author: "author",
                categories: "categories",
                year: ""
            }}
            handleClose={jest.fn()}
        />
      </ThemeProvider>
    );

    const bookDetail = await screen.findByTestId("book-detail");
    expect(bookDetail).toHaveBeenCalled();
  });
});