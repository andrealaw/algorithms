var meetings = [
    {startTime: 1, endTime: 3}, 
    {startTime: 7, endTime: 8}, 
    {startTime: 2, endTime: 4}, 
    {startTime: 5, endTime: 7}
];

// Create a deep copy of the array of objects
var meetingsCopy = JSON.parse(JSON.stringify(meetings));

// Sort an array of objects by their property value with O(n log n) time
var sortedMeetings = meetingsCopy.slice().sort(function(a, b) {
    return a.startTime > b.startTime ? 1 : -1;
});