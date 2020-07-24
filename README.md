## Problem Statement 
1. This JSON file describes a list of users & their corresponding periods of activity across multiple months. You’ll need to extrapolate this json sample to get a JSON sample for powering your mock API and your UI.
2. Now, design and implement a user interface that allows a user to view a list of hardcoded users from a mock API server. On clicking on any user, a modal should open which displays all the time ranges during which they were active on that day, with an option to view all the periods of activity for different days using a calendar.

## Solution
1. Implemented Users View using React Components which in turn uses bootstrap cards to display the user information. Responsiveness is also taken care of.
2. Used a SweetAlert Dialog to display the activities on that particular day by displaying a calender in the modal itself.
3. Code is refactored and readable.


The deployment of this app could be found at https://fullthrottleapp-project.herokuapp.com/
