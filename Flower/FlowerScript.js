function CardNumber(){

    var number = document.getElementById("txtCardNumber").value;
    if (number.trim() == "") {
        document.getElementById("spCardMessage").style.display = "inline";
        document.getElementById("txtCardNumber").style.borderColor = "red";
    }
    else {
        document.getElementById("spCardMessage").style.display = "none";
        document.getElementById("txtCardNumber").style.borderColor = "aqua";
    }
      
}

function Code() {
    var code = document.getElementById("txtSecCode").value;
    if (code.trim() == "") {
        document.getElementById("spCodeMessage").style.display = "inline";
        document.getElementById("txtSecCode").style.borderColor = "red";
    }
    else {
        document.getElementById("spCodeMessage").style.display = "none";
        document.getElementById("txtSecCode").style.borderColor = "aqua";
    }
       
}
function City() {
    var city = document.getElementById("txtCity").value;
    if (city.trim() == "") {
        document.getElementById("txtCity").style.borderColor = "red";
        document.getElementById("spCityMessage").style.display = "inline";
    }

    else {
        document.getElementById("txtCity").style.borderColor = "aqua";
        document.getElementById("spCityMessage").style.display = "none";
    }
        
}
function Name() {
    var name = document.getElementById("txtName").value;
    if (name.trim() == "") {
        document.getElementById("spNameMessage").style.display = "inline";
        document.getElementById("txtName").style.borderColor = "red";
    }

    else {
        document.getElementById("txtName").style.borderColor = "aqua";
        document.getElementById("spNameMessage").style.display = "none";
    }
        
}
function PCode() {
    var pcode = document.getElementById("txtPCode").value;

    if (pcode.trim() == "") {
        document.getElementById("spPCodeMessage").style.display = "inline";
        document.getElementById("txtPCode").style.borderColor = "red";
    }

    else {
        document.getElementById("txtPCode").style.borderColor = "aqua";
        document.getElementById("spPCodeMessage").style.display = "none";
    }
        
}
function Address() {

    var address = document.getElementById("txtAddress1").value;
    if (address.trim() == "") {
        document.getElementById("txtAddress1").style.borderColor = "red";
        document.getElementById("spAddressMessage").style.display = "inline";
    }

    else {
        document.getElementById("txtAddress1").style.borderColor = "aqua";
        document.getElementById("spAddressMessage").style.display = "none";
    }
    }
        
function Email() {
    var email = document.getElementById("txtEmail").value;
    if (email.trim() == "") {
        document.getElementById("txtEmail").style.borderColor = "red";
        document.getElementById("spEmailMessage").style.display = "inline";
    }

    else {
        document.getElementById("txtEmail").style.borderColor = "aqua";
        document.getElementById("spEmailMessage").style.display = "none";
    }  
    }
        

function ExpiryDate() {
    var month = document.getElementById("listMonth").SelectedIndex;
    var year = document.getElementById("listYear").SelectedIndex;
    if (month === 0 || year === 0) {
        document.getElementById("listMonth").style.borderColor = "red";
        document.getElementById("listYear").style.borderColor = "red";
        document.getElementById("spMessage").style.display = "inline";
    }
    else {
        document.getElementById("listMonth").style.borderColor = "aqua";
        document.getElementById("listYear").style.borderColor = "aqua";
        document.getElementById("spMessage").style.display = "none";
    }

}

function ValidateFields() {
    var code = document.getElementById("txtSecCode").value;
    var number = document.getElementById("txtCardNumber").value.length;
    var code = document.getElementById("txtSecCode").value.length;
    var email = document.getElementById("txtEmail").value.length;
    var pcode = document.getElementById("txtPCode").value.length;
    var address = document.getElementById("txtAddress1").value.length;
    var name = document.getElementById("txtName").value.length;
    var city = document.getElementById("txtCity").value.length;
    var number = document.getElementById("txtCardNumber").value.length;
    if (number > 0 && code > 0 && number > 0 && email > 0 && pcode > 0 && address > 0 && name>0 && city>0) {
        alert("Successfully Filled");
        
    }
    else {
        CardNumber();
        Code();
        ExpiryDate();
        City();
        Name();
        PCode();
        Address();
        Email();
    }
        
    
   
}


function ValidateCardNumber() {
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if (!document.getElementById("txtCardNumber").value.match(regex))
        document.getElementById("spCardNumber").style.display = "inline";
    else
        document.getElementById("spCardNumber").style.display = "none";
}

function validateSecurityCode() {
    var regex = /[0-9]{3}/;
    if (!document.getElementById("txtSecCode").value.match(regex))
        document.getElementById("spSecCode").style.display = "inline";
    else
        document.getElementById("spSecCode").style.display = "none";
}

function ValidateName() {
    var x = document.getElementById("txtName").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!x.match(regex)) 
        document.getElementById("spName").style.display = "inline";    
    else 
        document.getElementById("spName").style.display = "none";
    }

function ValidateCity() {
    var x = document.getElementById("txtCity").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!x.match(regex)) 
        document.getElementById("spCity").style.display = "inline";
        else 
        document.getElementById("spCity").style.display = "none";
}

function ValidateRegion() {
    var x = document.getElementById("txtRegion").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!x.match(regex))
        document.getElementById("spRegion").style.display = "inline";
    else
        document.getElementById("spRegion").style.display = "none";
}
function ValidateAddress() {
    var x = document.getElementById("txtAddress1").value;
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!x.match(regex)) 
        document.getElementById("spAddress1").style.display = "inline";
        else 
        document.getElementById("spAddress1").style.display = "none";
    
}
function ValidateAddress1() {
    var x = document.getElementById("txtAddress2").value;
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!x.match(regex)) 
        document.getElementById("spAddress2").style.display = "inline";    
    else 
        document.getElementById("spAddress2").style.display = "none";    
}
function ValidateAddress2() {
    var x = document.getElementById("txtAddress3").value;
    var regex = /^[a-zA-Z0-9\s,'-]*$/;
    if (!x.match(regex)) 
        document.getElementById("spAddress3").style.display = "inline";    
    else 
        document.getElementById("spAddress3").style.display = "none";    
}
function ValidatePhone() {
   
    var x = document.getElementById("txtPhone").value;
    var regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (!x.match(regex)) 
        document.getElementById("spPhone").style.display = "inline";    
    else 
        document.getElementById("spPhone").style.display = "none";
    
}

function ValidateFax() {
    var x = document.getElementById("txtFax").value;
    var regex = /^\+?[0-9]{6,}$/;
    if (!x.match(regex)) {
        document.getElementById("spFax").style.display = "inline";
    }
    else {
        document.getElementById("spFax").style.display = "none";
    }
}

function ValidateEmail() {
    var x = document.getElementById("txtEmail").value;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!x.match(regex)) {
        document.getElementById("spEmail").style.display = "inline";
    }
    else {
        document.getElementById("spEmail").style.display = "none";
    }
}
function ValidatePCode() {
    var x = document.getElementById("txtPCode").value;
    var regex = /^\d{5}$|^\d{5}-\d{4}$/;
    if (!x.match(regex)) {
        document.getElementById("spPCode").style.display = "inline";
    }
    else {
        document.getElementById("spPCode").style.display = "none";
    }
}

