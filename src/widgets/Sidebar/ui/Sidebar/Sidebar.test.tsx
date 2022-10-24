import {fireEvent, screen} from '@testing-library/react';
import {renderWithTranslation} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import {Sidebar} from './Sidebar';


describe('Sidebar', () => {
  test('In the Document', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('Test toogle', () => {
    renderWithTranslation(<Sidebar />);
    const toogleBtn = screen.getByTestId('sidebar-toogle');
    fireEvent.click(toogleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
