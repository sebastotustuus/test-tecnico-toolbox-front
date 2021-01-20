/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/Header';
import ProviderMock from '../__mocks__/ProviderMock';

describe('<Header />', () => {
  const header = mount(
    <ProviderMock>
      <Header />
    </ProviderMock>
  );
  it('should render de component', () => {
    expect(header.length).toEqual(1);
  });

  it('should has the classNames for bootstrap to the nav', () => {
    expect(header.find('.navbar').length).toEqual(1);
    expect(header.find('.navbar-dark').length).toEqual(1);
    expect(header.find('.bg-dark').length).toEqual(1);
  });

  it('should has important tags', () => {
    expect(header.find('button').length).toEqual(1);
    expect(header.find('form').length).toEqual(1);
  });
});
