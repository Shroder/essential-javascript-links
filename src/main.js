import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-module-router';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';
import List from './modules/List';
import LinkList from './modules/List/components/LinkList';
import Http from 'cerebral-module-http';

const controller = Controller(Model({}));

controller.addModules({
  list: List()
});

ReactDOM.render(<Container controller={controller}><LinkList /></Container>, document.getElementById('root'));
