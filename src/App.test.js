import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'

describe('App',()=>{

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('is test valid' , ()=>{
   const component = renderer.create(
     <App />
   );
   const tree = component.toJSON();
   expect(tree).toMatchSnapshot();
  });
});


