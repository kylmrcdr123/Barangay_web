
function navigateTo(sectionId) {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
	document.getElementById('appt').scrollIntoView({ behavior: 'smooth' });
	document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
	document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn-appointment').addEventListener('click', appointment);
	
	

$("id").on('click', function () {
    $("#home, #appt, #contact, #about").addClass("hidden");
    navigateTo($(this).attr("onclick").substring(12, $(this).attr("onclick").length - 2));
});
    $("#datepicker").datepicker();
});




function appointment() {
   
	
	const fname = document.getElementById("fname").value;
		const phone = document.getElementById("phone").value;
		const email = document.getElementById("add").value;
		const address = document.getElementById("adr").value;
		const purok = document.getElementById("purok").value;
		const city = document.getElementById("city").value;
		const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		
		if(fname =='')
		{
			alert("please input full name.");}
		
		else if(phone =='')
		{
        	alert("Please input phone number");
		}
		else if(email =='')
		{
			alert("Please input email address");
		}
		else if(address =='')
		{
			alert("Please input address");
		}
		else if(purok =='')
		{
			alert("Please input purok #");
		}
		else if(city =='')
		{
			alert("Please input city");
		}
		
		else if(!filter.test(email))
		{
			alert("Enter valid email id.");
		}
		else if(phone.length < 11 || phone.length > 11)
		{
			alert("Enter valid phone number!");
		}
		else if(purok.length < 3 || purok.length > 3)
		{
			alert("Enter purok #!");
		}
		else
		{
	alert('Appointment successful! ');
			}
}
