import React from 'react';
import Footer from '../';
import renderer from 'react-test-renderer';

test('components/Footer', () => {
  const component = renderer.create(
    <Footer ></Footer>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});