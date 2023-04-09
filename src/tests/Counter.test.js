// import necessary react testing library helpers here
import { fireEvent, render,screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';
import '@testing-library/jest-dom'

beforeEach(() => {
  // Render the Counter component here
	render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
	const counterMessage = screen.getByText(/Counter/i);
	expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
	const startAtZero = screen.getByText(/0/i);
	expect(startAtZero).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
	const count = screen.getByTestId("count");
	const incButton = screen.getByRole('button', {
		name: "+"
	})
	fireEvent.click(incButton);
	expect(count).toHaveTextContent("1");

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
	const count = screen.getByTestId("count");
	const decButton = screen.getByRole('button', {
		name: "-"
	})
	fireEvent.click(decButton);
	expect(count).toHaveTextContent("-1");
});
