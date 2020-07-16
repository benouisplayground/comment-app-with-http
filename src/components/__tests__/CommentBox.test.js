import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach( () => {
  wrapped = mount(<CommentBox />);
});

afterEach( () => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {

  beforeEach( ()=> {

    wrapped.find('textarea').simulate('change', { // find text area and simulate a fake event obj
      target: { value: 'new comment' }
    });
    wrapped.update(); // force the component to update with the new value

  } )

  it('has a text area that users can type in', () => {

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

  });

  it('get emptied when the form is submitted', () => {

    wrapped.find('form').simulate('submit');

    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');

  })


})