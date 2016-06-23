import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		editTask: function(id) {

			var myself = this;

			var title = this.get('model.title');
			var description = this.get('model.description');
			var date = this.get('model.date');

			//update task
			this.store.findRecord('task', id).then(function(task){
				task.set('title', title);
				task.set('description', description);
				task.set('date', new Date(date));
				
				//save
				task.save();
				
				myself.transitionToRoute('tasks'); 
			});


		}
	}
});
