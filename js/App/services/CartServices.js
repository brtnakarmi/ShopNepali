(function () {
	'use strict';

	angular
	.module('app')
	.services('CartServices', CartServices);

	CartServices.$inject = [];

	function CartServices() {
		var services = this;

		var cartItems = 0;

		services.getCartItems = getCartItems;

		return services;

		function getCartItems (){
			return cartItems;
		}
	}
})();