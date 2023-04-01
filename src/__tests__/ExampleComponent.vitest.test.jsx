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
    act(() => vi.advanceTimersByTime(1000)); // avanzamos los timers para que se ejecute el timeout
    await waitFor(() => screen.getByText("Hello, world!")); // esperamos a que el mensaje cambie
    expect(screen.getByText("Hello, world!")).toBeInTheDocument(); // comprobamos que el mensaje sea el correcto
  });
});
