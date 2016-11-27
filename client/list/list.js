/*
 * Helpers
 */
Template.list.helpers({
	tasks : function() {
		return Tasks.find({});
	},

	formatDate : function() {
		return moment(this.date).format('DD/MM/YYYY HH:mm');
	}
});

/*
 * Events
 */
Template.list.events({
	// It must be exactly the string "click button"
	"click button" : function(e, template) {
		var task = this; // Identify the current task
		
		/* This function calls the method "remove"
		 * and it has the id of the task as paramn */
		Meteor.call("remove", task._id);
	}
});
