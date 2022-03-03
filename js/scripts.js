 var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;


var reminders = ["When you asked if we should get lightsabers for my nephew. The thought didn't occur in me, but I was taken back that you were thinking of them. It warmed my heart", 
"You bringing me a twix bar cause I told you a twix man. Feeling you pay attention to the smallest things lets me feel heard",
"I asked you to plate the wings once for dinner cause I knew my plating skills suck. All you did was just put the wings the plate, which I suppose is exactly what I asked for but I could have done that 5 second task. But you had this goofy cheesy smile that you felt so accomplished for doing such a thing despite I made the meal. I love that smile "]
 document.getElementById('today_date').innerHTML = today;
 document.getElementById('reminder').innerHTML = reminders.slice(-1)[0] 

