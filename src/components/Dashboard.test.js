import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-17-updated';
import Dashboard from "./Dashboard";

configure({
  adapter: new Adapter()
});

describe('Dashboard', () => {
  it('Show value', () => {
    const wrapper = shallow(<Dashboard valor={ 1000 } />);

    const result = wrapper
      .text()
      .includes('1000');

    expect(result).toEqual(true);
  });
})