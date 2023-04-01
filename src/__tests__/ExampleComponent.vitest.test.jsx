import "@testing-library/jest-dom";
import { act, render, screen, waitFor } from "@testing-library/react";
import ExampleComponent from "../ExampleComponent";

describe("ExampleComponent", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.clearAllTimers();
  });

  test("changes message after 1 second", async () => {
    render(<ExampleComponent />);
    act(() => vi.advanceTimersByTime(1000));
    expect(await screen.findByText("Hello, world!")).toBeInTheDocument();
  });

  test("changes message after 1 second --- 2", async () => {
    render(<ExampleComponent />);
    act(() => vi.advanceTimersByTime(1000));
    await waitFor(() =>
      expect(screen.getByText("Hello, world!")).toBeInTheDocument()
    );
    expect(await screen.getByText("Hello, world!")).toBeInTheDocument();
  });
});
