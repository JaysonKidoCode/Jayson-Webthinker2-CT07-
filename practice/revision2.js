let convert = () => {
    // Retrieve the value from the input form
    const amt = $('#sgd').val() || "";
    // Remove all error messages
    $('.err-msg').remove();
    $('#sgd,#sgd~*').removeClass('is-invalid text-danger');
    // Check if the input is empty, if so, throw an error to the user to fill in the form.
    if (amt == "") {
        $('#inputs').append(`<p class="text-danger err-msg">Please enter a value.</p>`);
        $('#sgd,#sgd~*').addClass('is-invalid text-danger');
    }
    // Check if the input value is less than 0 (currency should not be less than 0), if so, throw an error to the user to correct their mistake.
    else
    if (amt < 0) {
        $('#inputs').append(`<p class="text-danger err-msg">Amount should not be negative (-) or below 0.</p>`);
        $('#sgd,#sgd~*').addClass('is-invalid text-danger');
    }
    // Since there are no error, proceed to calculate the pricing & value
    else {
        // Set the default exchange rate
        const exchangeRate = 3.4;
        // Show the result of the exchange
        $('#resultHead').removeClass('d-none');
        $('#resultBody').removeClass('d-none');
        // Update the result with the appropriate values
        $('#sgdAmt').html("SGD " + amt);
        $('#myrAmt').html("MYR " + (Math.round(parseFloat(amt) * exchangeRate * 100) / 100));
    }
}
// Auto rounding of inputs (& format) to the correct 2 decimal place.
// There is no bug/mistake for this function
let round = () => {
    const amt = $('#sgd').val() || "";
    let rounded = Math.round(parseFloat(amt) * 100) / 100;
    if (amt != rounded) $('#sgd').val(rounded);
}