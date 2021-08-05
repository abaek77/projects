import App, { setTodos } from '../App'
import Form, { todoinput } from '../Form'
import Item from '../Item'
import List from '../List'
import { getByTestId, render, fireEvent, act } from '@testing-library/react'
import React, { useState } from 'react'



const waitOneSecond = async () => await new Promise((r) => setTimeout(r, 1000))

describe("TodoList testing", () => {


    test('changing input should change value of imput element', async () => {

        const { getByTestId } = render(<Form setTodos={setTodos} />)

        const inputField = getByTestId("todo-input")
        const button = getByTestId("todo-button")

        act(() => {
            fireEvent.change(inputField, { target: { value: "walk the dog" } })
            fireEvent.click(button)
        })


        await waitOneSecond();

        expect(todoinput).toContain("walk the dog")
    })


})