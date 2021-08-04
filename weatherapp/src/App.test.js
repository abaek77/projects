import { render, screen, cleanup } from "@testing-library/react";
import App from './App';
import Time from './Time'


afterEach(() => {
    cleanup();
});

test('should render correct current time', () => {
    render(<App />);
    const time = screen.getByTestId('time')
    expect(time).toHaveTextContent("12:17")
})