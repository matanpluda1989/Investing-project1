
/**
 * The function is excuted onload of page for insert options select to area code
 */
function getListAreaCode() {
    
    var areaCodesNumber = ['+972', '+1', '+49'];
    var areaCodesTitle = ['Israel', 'USA', 'Germany'];
    
    var numCountry = areaCodesNumber.length;

    var select = document.getElementsByTagName('select')[0];
    var option;

    for(var i = 0; i < numCountry; i++) {
        option = document.createElement('option');
        option.innerHTML = areaCodesNumber[i];
        option.title = areaCodesTitle[i];
        select.appendChild(option);
    }
    
}

/**
 * The function is excuted when submit button ('START NOW') is clicked.
 * The function is add validation to the html validations and alert message if 
 * the registration valid.
*/
function validation() {

    /*Validtion to valid phone - 6-10 digits*/
    var phone = document.getElementsByName('phone')[0].value;
    if(phone.length < 6 || phone.length > 10) {
        alert("Phone Number must be between 6 to 10 digits");
        return false;
    }

    //All validation is valid - possible to register
    alert("Register was sucsessed");
    
}