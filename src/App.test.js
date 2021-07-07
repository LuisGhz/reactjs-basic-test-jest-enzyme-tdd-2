import { mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-17-updated';
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from 'App';

configure({
  adapter: new Adapter()
})

describe('App', () => {
  it('Interact with our store', () => {
    const prevent = jest.fn();
    const reducer = jest.fn().mockReturnValue({
      finanzas: [{ desc: 'Water', cant: 150 }]
    });
    const store = createStore(reducer);
    const wrapper = mount(
      <Provider store={ store } >
        <App />
      </Provider>
    );

    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: 'Truck' } });

    wrapper
      .find('input')
      .at(1)
      .simulate('change', { target: { value: 500 } });

    wrapper
      .find('form')
      .simulate('submit', { preventDefault: prevent });

    wrapper
      .find('button')
      .at(1)
      .simulate('click');

    const [a, ...rest] = reducer.mock.calls;

    expect(rest).toEqual([
      [
        { finanzas: [{ desc: 'Water', cant: 150 }] },
        { type: 'AGREGAR', payload: { desc: 'Truck', cant: 500 } }
      ],
      [
        { finanzas: [{ desc: 'Water', cant: 150 }] },
        { type: 'ELIMINAR', index: 0 }
      ]
    ]);

    const isWater = wrapper.text().includes('Water');

    expect(isWater).toEqual(true);
  });
});