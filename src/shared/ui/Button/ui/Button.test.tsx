import {render, screen} from '@testing-library/react';
import {Button, ThemeButton} from './Button';


describe('Button', () => {
  test('Has text', () => {
    render(<Button>test</Button>);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
  test('Has class', () => {
    render(<Button theme={ThemeButton.CLEAR}></Button>);
    expect(screen.getByRole('button')).toHaveClass('clear');
  });
});
