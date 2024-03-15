import React from "react";
import "./index.css";
// import Logo from '../../assets/images/logoz.png';

function Checkout() {
  return (
    <div className="payment">
      {/* <div>
            <img src={Logo} alt="Logo-zi" className='logos'/>
        </div> */}
      <h1 className="green">Payment Information</h1>
      <form>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input type="text" id="expirationDate" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="billingAddress">Billing Address:</label>
          <input type="text" id="billingAddress" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="billingAddress">Billing Amount:</label>
          <input type="text" id="billingAddress" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" className="form-control" />
        </div>

        <div className="form-group">
          {/* <label country="state">Country/State:</label>
          <input type="text" id="state" className="form-control" /> */}

          <div>
            <label htmlFor="country">Country</label>
            <span
              style={{
                color: "red !important",
                display: "inline",
                float: "none",
              }}
            >
              *
            </span>
          </div>
          <select id="country" name="country" className="form-control">
            <option value="Afghanistan">Afghanistan</option>
            <option value="Åland Islands">Åland Islands</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Aruba">Aruba</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bermuda">Bermuda</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegovina">
              Bosnia and Herzegovina
            </option>
            <option value="Botswana">Botswana</option>
            <option value="Bouvet Island">Bouvet Island</option>
            <option value="Brazil">Brazil</option>
            <option value="British Indian Ocean Territory">
              British Indian Ocean Territory
            </option>
            <option value="Brunei Darussalam">Brunei Darussalam</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Cape Verde">Cape Verde</option>
            <option value="Cayman Islands">Cayman Islands</option>
            <option value="Central African Republic">
              Central African Republic
            </option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Christmas Island">Christmas Island</option>
            <option value="Cocos (Keeling) Islands">
              Cocos (Keeling) Islands
            </option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo</option>
            <option value="Congo, The Democratic Republic of The">
              Congo, The Democratic Republic of The
            </option>
            <option value="Cook Islands">Cook Islands</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Cote D'ivoire">Cote D'ivoire</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Falkland Islands (Malvinas)">
              Falkland Islands (Malvinas)
            </option>
            <option value="Faroe Islands">Faroe Islands</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="French Guiana">French Guiana</option>
            <option value="French Polynesia">French Polynesia</option>
            <option value="French Southern Territories">
              French Southern Territories
            </option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Gibraltar">Gibraltar</option>
            <option value="Greece">Greece</option>
            <option value="Greenland">Greenland</option>
            <option value="Grenada">Grenada</option>
            <option value="Guadeloupe">Guadeloupe</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Payment
        </button>
      </form>
    </div>
  );
}

export default Checkout;
