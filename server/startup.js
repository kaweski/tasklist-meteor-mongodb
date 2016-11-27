// This function was create because the autopublish functionality was disabled

Meteor.startup(function() {

	/* The server publishes something called "tasks"
	and the client has to subscribe the db called "tasks" to access. */
	Meteor.publish("tasks", function() {
		return Tasks.find({
			user : this.userId // Filters the db to the logged current user
		});
	});

});
