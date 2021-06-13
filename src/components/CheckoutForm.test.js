import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange
    render(<CheckoutForm />);

    //Act
    const header = screen.getByText(/Checkout Form/i);


    //Assert
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent(/Checkout Form/i);

});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    const inputFirstName = screen.getByLabelText(/First Name:/i);
    const inputLastName = screen.getByLabelText(/Last Name:/i);
    const inputAddress = screen.getByLabelText(/Address:/i);
    const inputCity = screen.getByLabelText(/City:/i);
    const inputState = screen.getByLabelText(/State:/i);
    const inputZip = screen.getByLabelText(/Zip:/i);
    const submitBtn = document.querySelector('button');

    await userEvent.type(inputFirstName, 'Jeffery');
    await userEvent.type(inputLastName, 'Francois');
    await userEvent.type(inputAddress, '594 Westside Eastplace');
    await userEvent.type(inputCity, 'Orlando');
    await userEvent.type(inputState, 'FL');
    await userEvent.type(inputZip, '34766');

    userEvent.click(submitBtn);

    const successMessageWorks = screen.getByText(/green friends/i);
    const newCustomerInput = screen.getByText(/Jeffery/i);
    
    expect(successMessageWorks).toBeTruthy();
    expect(newCustomerInput).toBeTruthy();
    
    expect(successMessageWorks).toBeVisible();
    expect(newCustomerInput).toBeVisible();
});
