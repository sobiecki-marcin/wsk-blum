// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';

import Header from '../_layouts/header/header';

$(() => {
  Header.create('#navbar');
});
