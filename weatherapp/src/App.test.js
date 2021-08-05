import { render, screen, cleanup } from "@testing-library/react";
import App from './App';
import Time from './Time'

import Enzyme, { ReactWrapper, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

afterEach(() => {
    cleanup();
});

test('should render correct current time', () => {
    render(<Time />);
    const time = screen.getByTestId('time')
    expect(time).toHaveTextContent('Time:')
})

test('input should have a class', () => {
    render(<App />)
    const search_input = screen.getByTestId('search_input')
    expect(search_input).toHaveClass("searchtab__input")
})

test('hours should be less than 24', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find())

})