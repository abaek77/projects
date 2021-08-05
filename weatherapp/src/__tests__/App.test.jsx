import {render, getByTestId, fireEvent, act} from "@testing-library/react";
import Time, {options} from "../Time"
import App from "../App";

global.fetch = require('jest-fetch-mock');

const waitOneSecond = async () => await new Promise((r) => setTimeout(r, 1000));

const payload = {"coord":{"lon":13.4105,"lat":52.5244},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":21.55,"feels_like":21.56,"temp_min":20.05,"temp_max":23.2,"pressure":1009,"humidity":69},"visibility":10000,"wind":{"speed":3.13,"deg":44,"gust":3.58},"clouds":{"all":20},"dt":1628154353,"sys":{"type":2,"id":2011538,"country":"DE","sunrise":1628134352,"sunset":1628189529},"timezone":7200,"id":2950159,"name":"Berlin","cod":200}

describe("WeatherApp testing", () => {

	beforeEach(() => {
		fetch.resetMocks();
	});

	test("should display correct time", async () => {
		const {getByTestId} = render(<Time/>)
		const currentTime = getByTestId("time");
		const expectedTime = Intl.DateTimeFormat('en-US', options).format(new Date());

		expect(currentTime).toHaveTextContent("Time:")

		await waitOneSecond();

		expect(currentTime).toHaveTextContent(`Time: ${expectedTime}`)
	})

	test("should display data correctly", async () => {

		fetch.mockResponseOnce(JSON.stringify(payload))
		
		const {getByTestId, debug, container} = render(<App/>)
		const inputField = getByTestId("search_input");

		act(() => {
			fireEvent.change(inputField, {target: {value: "Berlin"}});
			fireEvent.keyPress(inputField, { key: "Enter", code: 13, charCode: 13 });
		})

		await waitOneSecond();

		const location = container.querySelector(".bottom-app__location");
		const weather = container.querySelector(".bottom-app__weather");
		const temperatureIcon = getByTestId("bottom-app__temperatureIcon");
		const weatherIcon = getByTestId("bottom-app__weatherIcon");
		const temperature = container.querySelector(".bottom-app__temperature");

		expect(location).toHaveTextContent("Berlin, DE");
		expect(weather).toHaveTextContent("Clouds");
		expect(temperatureIcon.src).toBe("https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/FireIcon.svg/1501px-FireIcon.svg.png");
		expect(weatherIcon.src).toBe("https://cdn.iconscout.com/icon/free/png-512/cloudy-cloud-snow-weather-38920.png");
		expect(temperature).toHaveTextContent("22°C");

	})
})
