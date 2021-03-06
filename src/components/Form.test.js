import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import Form from './Form';

configure({
  adapter: new Adapter()
})

describe('Form', () => {
  it('Add finanza', () => {
    const agregarFinanza = jest.fn();
    const prevent = jest.fn();
    const wrapper = shallow(<Form agregarFinanza={ agregarFinanza } />)

    wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value: 'Description' } })

    wrapper
    .find('input')
    .at(1)
    .simulate('change', { target: { value: '100' } });

    wrapper
      .find('form')
      .simulate('submit', { preventDefault: prevent });

    expect(agregarFinanza.mock.calls).toEqual([
      [{
        desc: 'Description',
        cant: 100
      }]
    ]);
    expect(prevent).toHaveBeenCalledTimes(1);
  });
});