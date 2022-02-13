import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import Header from './Header'


const renderWithRouter = (component) => {
    const history = createMemoryHistory()
    return { 
    ...render (
    <Router history={history}>
        {component}
    </Router>
    )
}
}


it('should navigate to the add page', ()=> {
 const { container, getByTestId } = renderWithRouter(<Header />) 

 fireEvent.click(getByTestId('add-link'))

 expect(container.innerHTML).toMatch('List of Credit Cards')
})
 

it('header should navigate to the Card List text  ', ()=> {
    const { getByTestId } = renderWithRouter(<Header />) 
    expect(getByTestId('home-link')).toHaveTextContent('Card List')
   })

//    it('should navigate to the home page', ()=> {
//     const { getByTestId } = renderWithRouter(<Header />) 
//     expect(getByTestId('add-link')).toHaveTextContent('Add Credit Card')
//    })