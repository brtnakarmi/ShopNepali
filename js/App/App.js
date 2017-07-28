(function() {
	//app initialization

	'use strict';

	angular
	.module ('app', ['ngRoute'])
	.config (Routeconfiguration);

Routeconfiguration.$inject = ['$routeProvider', '$locationProvider'];
function RouteConfiguration($routeProvider, $locationProvider) {
	$routeProvider
	.when("/shop", {
		templateUrl : 'partials/shop.html'
	})
	.when("/shop:accessories", {
		templateUrl : 'partials/shop/accessories.html'
	})
	.when("/shop:clothing", {
		templateUrl : 'partials/shop/clothing.html'
	})
	.when("/cart", {
		templateUrl : 'partials/cart.html'
	})
	.when("/account", {
		templateUrl : 'partials/account.html'
	})
	.when("/contact-us", {
		templateUrl : 'partials/contact-us.html'
	})
	.when("/privacy-policy", {
		templateUrl : 'partials/privacy-policy.html'
	})
	.when("/shipping-policy", {
		templateUrl : 'partials/shipping-policy.html'
	})
	.when("/return-policy", {
		templateUrl : 'partials/return-policy.html'
	})
	.when("/terms-of-use", {
		templateUrl : 'partials/terms-of-use.html'
	})
	.otherwise('/');
}
})();
