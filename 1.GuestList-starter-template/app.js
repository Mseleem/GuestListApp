new  Vue ({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventName: 'Summer Festival!',
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"
        },
        newNameText: '',
        guestName: []
        
    },
    methods: {
        formSumbitted: function() {
            this.guestName.push(this.newNameText)
            this.newNameText = ''
        }
    }
    
});