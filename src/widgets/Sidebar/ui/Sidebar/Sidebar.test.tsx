import {fireEvent, screen} from '@testing-library/react';
import {componentRender} from 'shared/lib/tests/componentRender/componentRender';
import {Sidebar} from './Sidebar';


describe('Sidebar', () => {
  test('In the Document', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('Test toogle', () => {
    componentRender(<Sidebar />);
    const toogleBtn = screen.getByTestId('sidebar-toogle');
    fireEvent.click(toogleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
