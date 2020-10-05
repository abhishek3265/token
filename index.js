let form= document.getElementById('form1');
let cardId= document.getElementById('cardID');
let aadhaar= document.getElementById('aadhaar-no');
let date=document.getElementById('dates').value;


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});
function checkInputs() {
    const Id = cardId.value.trim();
    

    if(Id ===""){
        setErrorFor(cardId, 'card Id cannot be blank');
        return false;
	} else if(isNaN(Id)) {
        setErrorFor(cardId, 'Not a Valid Card Id');
        return false;
    }    
    else if(Id.length<10 || Id.length>10) {
        setErrorFor(cardId, 'Not a Valid Id ');
        return false;
    }    
    else {
		setSuccessFor(cardId);
	}    
    
    const aadhaarNo = aadhaar.value.trim();

    if(aadhaarNo ===""){
        setErrorFor(aadhaar, 'aadhar cannot be blank');
    }
    else if(isNaN(aadhaarNo)) {
        setErrorFor(aadhaar, 'Not a Valid Aadhaar number');
        return false;
    }    
    else if(aadhaarNo.length<12 || aadhaarNo.length>12 ) {
        setErrorFor(aadhaar, 'Aadhar No should be of 12 digits');
        return false;
    } else {
		setSuccessFor(aadhaar);
	}    
    console.log(date);

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
    formControl.className = 'form-control success';
    }
 
   
    




    //check dates
function ab(){
    var d = new Date();
    d.setDate(d.getDay() + 15);
    let s = d.toString();
    document.getElementById("text").innerHTML = "Token Is Valid till" +"&nbsp; :-&nbsp;"+s.slice(0,16) ;
}

//to set current date
let today = new Date().toISOString().substr(0, 10);
document.querySelector("#today").value = today;



