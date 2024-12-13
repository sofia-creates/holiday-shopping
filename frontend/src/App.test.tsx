import '@testing-library/jest-dom';
import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';

import App from './App';

describe('App component', () => {
    it('should have a correct heading', () => {
        render(<App />);
        const heading = screen.getByText(/Have a holly, jolly christmas/i);
        expect(heading).toBeInTheDocument();
    });
})