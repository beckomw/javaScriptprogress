let restaurant = {
    name: ' big cat ',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailablility: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },


    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },


    removeParty: function (partySize) {
       this.guestCount = this.guestCount - partySize
    }

}


// seatParty 
// removeParty 

restaurant.seatParty(72)
console.log(restaurant.checkAvailablility(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailablility(4))

