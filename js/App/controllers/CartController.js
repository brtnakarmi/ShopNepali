(function() {
	'use strict';

	angular
	.module('app')
	.controller('CartController', CartController);

	CartController.$inject = ['CartServices'];

	function CartController(CartServices) {
		var vm = this;

		vm.addItem = addItem;

		init();

		function init() {

		}

		function addItem() {
			CartServices.addItem();
			console.log(CartServices.getCount());
		}
	}
})();