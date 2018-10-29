// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// jest.mock('react-i18next', () => ({
//   withNamespaces: () => Component => {
//     Component.defaultProps = { ...Component.defaultProps, t: () => 'hello' };
//     return Component;
//   },
// }));
