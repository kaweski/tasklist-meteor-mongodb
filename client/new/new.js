Template.new.events({
	"submit #addTask" : function(e, template) {
		e.preventDefault();

		var input = $("#task");
		var name = input.val();

		// This function calls the method "add" expecified in method.js
		Meteor.call("add", {
			name : name,
			date : new Date(),

			/* Add the user id to this current task added.
			It will be used as filter after. */
			user : this.userId
		});
		
		input.val("");
	}
});
