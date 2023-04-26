import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import USAPhoneNumber from './component/USAPhoneNumber';

test('Valid phone number', () => {
    render(<USAPhoneNumber />);

    const inputEl = screen.getByTestId("phone-input");
    userEvent.type(inputEl, '(416) 555-1212');

    expect(screen.getByTestId("phone-input")).toHaveValue('(416) 555-1212');
    expect(screen.getByText("Valid")).toBeInTheDocument();
});

test('InValid phone number: less than 10 digits', () => {
    render(<USAPhoneNumber />);

    const inputEl = screen.getByTestId("phone-input");
    userEvent.type(inputEl, '(416) 555-122');

    expect(screen.getByTestId("phone-input")).toHaveValue('(416) 555-122');
    expect(screen.getByText("InValid")).toBeInTheDocument();
});

test('InValid phone number: all digits `0`', () => {
    render(<USAPhoneNumber />);

    const inputEl = screen.getByTestId("phone-input");
    userEvent.type(inputEl, '(000) 000-0000');

    expect(screen.getByTestId("phone-input")).toHaveValue('(000) 000-0000');
    expect(screen.getByText("InValid")).toBeInTheDocument();
});
