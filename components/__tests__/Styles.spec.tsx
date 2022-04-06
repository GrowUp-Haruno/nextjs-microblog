import BorderCircle from '@/components/styles/BorderCircle';
import Heading, { SDiv } from '@/components/styles/Heading';

import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { getComponentsStyles } from '@/components/styles/jestFunctions/getComponentsStyles';

function expectStyles(dom: HTMLElement, componentsStyles: { [x: string]: string[] }, key: string) {
  componentsStyles[key].forEach((style) => {
    const property = style.split(',')[0];
    const value = style.split(',')[1];
    expect(dom).toHaveStyleRule(property, value);
  });
}

describe('BorderCircle', () => {
  const componentsStyles = getComponentsStyles({ BorderCircle });
  it('指定のスタイルが適用できてるか', () => {
    render(<BorderCircle src="/images/profile.png" alt="プロフィール画像" />);
    const img = screen.getByRole('img');
    expect(img).toHaveStyleRule('border-radius', '1000px');
    expectStyles(img, componentsStyles, 'BorderCircle');
  });
});

describe('指定のスタイルが適用できてるか', () => {
  describe('Heading(h1)', () => {
    const componentsStyles = getComponentsStyles(SDiv);
    it('md', () => {
      render(<Heading as="h1" size="md"></Heading>);
      const heading = screen.getByRole('heading', { level: 1 });
      expectStyles(heading, componentsStyles, 'md');
    });
    it('lg', () => {
      render(<Heading as="h1" size="lg"></Heading>);
      const heading = screen.getByRole('heading', { level: 1 });
      expectStyles(heading, componentsStyles, 'lg');
    });
    it('xl', () => {
      render(<Heading as="h1" size="xl"></Heading>);
      const heading = screen.getByRole('heading', { level: 1 });
      expectStyles(heading, componentsStyles, 'xl');
    });
    it('2xl', () => {
      render(<Heading as="h1" size="2xl"></Heading>);
      const heading = screen.getByRole('heading', { level: 1 });
      expectStyles(heading, componentsStyles, '2xl');
    });
  });
  describe('Heading(h2)', () => {
    const componentsStyles = getComponentsStyles(SDiv);
    it('md', () => {
      render(<Heading as="h2" size="md"></Heading>);
      const heading = screen.getByRole('heading', { level: 2 });
      expectStyles(heading, componentsStyles, 'md');
    });
    it('lg', () => {
      render(<Heading as="h2" size="lg"></Heading>);
      const heading = screen.getByRole('heading', { level: 2 });
      expectStyles(heading, componentsStyles, 'lg');
    });
    it('xl', () => {
      render(<Heading as="h2" size="xl"></Heading>);
      const heading = screen.getByRole('heading', { level: 2 });
      expectStyles(heading, componentsStyles, 'xl');
    });
    it('2xl', () => {
      render(<Heading as="h2" size="2xl"></Heading>);
      const heading = screen.getByRole('heading', { level: 2 });
      expectStyles(heading, componentsStyles, '2xl');
    });
  });
});
