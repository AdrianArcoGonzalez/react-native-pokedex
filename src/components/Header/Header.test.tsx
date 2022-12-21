import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Header from './Header';

jest.mock('react-native-safe-area-context', () => {
    const inset = {top: 0, right: 0, bottom: 0, left: 0};
    return {
        useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
    };
});

describe('Given a Header component', () => {
    describe("When it's instantiated with a text", () => {
        test('Then it should show the text given', () => {
            const headerText = 'test';

            render(<Header text={headerText} />);

            const header = screen.getByText(headerText);

            expect(header).toBeDefined();
        });
    });
});
