import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-17-updated';
import Finanzas from "./Finanzas";

configure({
  adapter: new Adapter()
})

describe('Finanzas', () => {
  it('Call delete finanza onClick', () => {
    const finanzas = [
      {
        desc: 'Finanza 1',
        cant: 100
      },
      {
        desc: 'Finanza 2',
        cant: 150
      }
    ];
    const eliminarFinanza = jest.fn();
    const wrapper = shallow(<Finanzas 
      finanzas={ finanzas } eliminarFinanza={ eliminarFinanza } 
      />
    );
    
    wrapper
      .find('button')
      .at(0)
      .simulate('click');

    const result1 = wrapper.text().includes('Finanza 1');
    const result2 = wrapper.text().includes('Finanza 2');

    expect(eliminarFinanza.mock.calls).toEqual([[0]]);
    expect(result1).toEqual(true);
    expect(result2).toEqual(true);

  });
});