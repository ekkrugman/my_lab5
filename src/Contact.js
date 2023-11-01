import React from 'react';
function Contact() {
    return(
<div>
<form>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label htmlfor="validationDefault01">First name</label>
      <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required/>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlfor="validationDefault02">Last name</label>
      <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required/>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlfor="validationDefaultUsername">Username</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend2">@</span>
        </div>
        <input type="text" className="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required/>
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label htmlfor="validationDefault03">City</label>
      <input type="text" className="form-control" id="validationDefault03" placeholder="City" required/>
    </div>
    <div className="col-md-3 mb-3">
      <label htmlfor="validationDefault04">State</label>
      <input type="text" className="form-control" id="validationDefault04" placeholder="State" required/>
    </div>
    <div className="col-md-3 mb-3">
      <label htmlfor="validationDefault05">Zip</label>
      <input type="text" className="form-control" id="validationDefault05" placeholder="Zip" required/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label className="form-check-label" htmlfor="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <button className="btn btn-primary" type="submit">Submit form</button>
</form>
</div>
    )
}
export default Contact;