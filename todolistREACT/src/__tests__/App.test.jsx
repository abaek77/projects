import App from '../App'
import {act, fireEvent, getByTestId, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import React from 'react'

describe("TodoList testing", () => {

	test("changing input should change value of imput element", () => {
		const {getByTestId, getByText} = render(<App/>)
		const inputField = getByTestId("todo-input")
		const button = getByTestId("todo-button")
		const taskValue = "walk"

		act(() => {
			fireEvent.change(inputField, {target: {value: taskValue}})
		})
		fireEvent.click(button)

		const task = getByText(taskValue);

		expect(task).toBeInTheDocument();
	})


})
