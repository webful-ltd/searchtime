import 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import renderer from 'react-test-renderer';
import React from 'react';
import SearchTime from '../../app/containers/SearchTime';
import searchtimeReducers from '../../app/reducers/index';

const store = createStore(searchtimeReducers);

describe('<SearchTime />', () => {
  it('should have the right key UI elements', () => {
    const st = renderer.create(<Provider store={store}>
      <SearchTime />
    </Provider>).toJSON();

    expect(st.props.style.flex).toEqual(1);
    expect(st.props.style.padding).toEqual(20);
    expect(st.children.length).toEqual(7);

    expect(st.children[0].type).toEqual('Text');
    expect(st.children[0].children[0]).toEqual('From:');

    expect(st.children[1].type).toEqual('View');
    expect(st.children[1].props.accessible).toEqual(true);
    expect(st.children[1].children[0].children[0].children[0].type).toEqual('Text');
    expect(st.children[1].children[0].children[0].children[0].children[0]).toEqual('2016-01-01');

    expect(st.children[2].type).toEqual('Text');
    expect(st.children[2].children[0]).toEqual('To:');

    expect(st.children[3].type).toEqual('View');
    expect(st.children[3].props.accessible).toEqual(true);

    expect(st.children[4].type).toEqual('Text');
    expect(st.children[4].children[0]).toEqual('Search:');

    expect(st.children[5].type).toEqual('TextInput');
    expect(st.children[5].props.style.height).toEqual(40);

    expect(st.children[6].type).toEqual('View');
    expect(st.children[6].props.accessible).toEqual(true);
    expect(st.children[6].props.style.height).toEqual(45);
    expect(st.children[6].props.style.backgroundColor).toEqual('#ffffff');
    expect(st.children[6].children[0].type).toEqual('Text');
    expect(st.children[6].children[0].props.allowFontScaling).toEqual(true);
    expect(st.children[6].children[0].children[0]).toEqual('Search Google');
  });
});
