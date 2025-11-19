import { render, screen } from '@testing-library/angular';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  it('should render Sonora AI title', async () => {
    await render(HeaderComponent);

    const title = screen.getByText('Sonora AI');
    expect(title).toBeTruthy();
  });
});
