import { Sample } from '@/components/Sample';
import { render, screen } from '@testing-library/react';

describe('Sampleコンポーネント', () => {
  test('should first', () => {
    render(<Sample />);
    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toHaveTextContent('Nextjs+Jestのサンプルサプリ');
  });
});
