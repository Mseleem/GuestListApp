new  Vue ({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventName: 'Summer Festival!',
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!",
            eventDetails: "Add your name to the guest list for <em>exclusive</em> offers:",
        },
        newNameText: '',
        guestName: [],
        formSubmitClass: "",
        appStyles: {    
            marginTop: "25px",
        },
        eventCapacity : 25, 
        eventCapacityPercentage: 0 //length of the progress bar converted into the width, binded to the style
        
    },
    methods: {
        formSumbitted: function() {
            if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
                this.guestName.push(this.newNameText)
                this.newNameText = ''
                // this.formSubmitClass = "submitted"
                this.eventCapacityPercentage = (this.guestName.length/this.eventCapacity)*100   
            }
        },
        keyPressed: function() {
            console.log("a key was pressed")
        }
    },
    computed: {
        sortName: function() {
            return this.guestName.sort()
        }
    },
    filters: {
        toUpper: function(value) {
            return value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase()
        },
    }
    
});