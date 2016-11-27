// The client subscribes a publish from server
Meteor.startup(function() {

	// If the server made a publish, the client need to subscribe
	Meteor.subscribe("tasks");

	// Now the client mongo db has a copy of it.

})
