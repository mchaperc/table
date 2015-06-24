import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'div',
	classNames: 'states-list-item',

	actions: {
		sortStates: function(places) {
			places.sort(function(a,b) {
				if (a.state === "Alabama") {
					if (a.name > b.name) {
						return a;
					}
				} else {
					if (a.name > b.name) {
						return b;
					}
				}
			});
			places.forEach(function(state) {
				console.log(state.state);
			});
		}
	}

});