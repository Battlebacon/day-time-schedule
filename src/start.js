export class Start {
  DAYSTART = new Date().setHours(7, 0, 0);
  DAYEND = new Date().setHours(18, 0, 0);
  days = [
    {
      bookings: [
        {
          startTime: new Date().setHours(8, 30, 0),
          endTime: new Date().setHours(10, 0, 0),
          bookedBy: '',
          bookable: true
        },
        {
          startTime: new Date().setHours(11, 0, 0),
          endTime: new Date().setHours(11, 30, 0),
          bookedBy: '',
          bookable: true
        },
        {
          startTime: new Date().setHours(13, 30, 0),
          endTime: new Date().setHours(17, 0, 0),
          bookedBy: '',
          bookable: true
        }
      ]
    },
    {
      bookings: [
        {
          startTime: new Date().setHours(9, 30, 0),
          endTime: new Date().setHours(11, 0, 0),
          bookedBy: '',
          bookable: true
        },
        {
          startTime: new Date().setHours(12, 0, 0),
          endTime: new Date().setHours(14, 0, 0),
          bookedBy: '',
          bookable: true
        },
        {
          startTime: new Date().setHours(15, 30, 0),
          endTime: new Date().setHours(16, 45, 0),
          bookedBy: '',
          bookable: true
        }
      ]
    }
  ];

  doStuff(booking) {
    console.log(booking);
    alert(`Bokning med starttime: ${new Date(booking.startTime)} klickad`);
  }
}
