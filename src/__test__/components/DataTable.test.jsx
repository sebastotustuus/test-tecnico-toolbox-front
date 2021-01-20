/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import DataTable from '../../components/DataTable';
import ProviderMock from '../__mocks__/ProviderMock';
import wordsMock from '../__mocks__/words.mock';

describe('<DataTable />', () => {
  const table = mount(
    <ProviderMock>
      <DataTable words={wordsMock} />
    </ProviderMock>
  );
  it('should render de component', () => {
    expect(table.length).toEqual(1);
  });

  it('should receive props', () => {
    expect(table.props().children.props.words).toEqual(wordsMock);
  });

  it('should has the classname table-responsive', () => {
    expect(table.find('.table-responsive').length).toEqual(1);
  });

  it('should has three table headers', () => {
    expect(table.find('th').length).toEqual(3);
  });

  it('should has table tag', () => {
    expect(table.find('table').length).toEqual(1);
  });
});
