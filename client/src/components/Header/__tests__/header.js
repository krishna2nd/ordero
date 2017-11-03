import React from 'react';
import Header from '../';
import renderer from 'react-test-renderer';

test('components/Header', () => {
  const component = renderer.create(
    <Header></Header>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});