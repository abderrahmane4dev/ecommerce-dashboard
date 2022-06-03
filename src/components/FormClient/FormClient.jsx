import "./style.css";
import React, { Component, useState } from "react";



class FormClient extends Component {
  
  render(){
  return (<>
  <div className="ClientForm" >
    <div >
      <h1>Creation d'un compte client</h1>
      <p>Vueillez renseigner les champs présentés sur ce formulaire</p>
      <br/>

    <div >
      <form action="#">
        <div >
        {/* Nom */}
        
        <div className="NomPre">
            <div className="inputClient">
            <h4>Nom du client</h4>
            <input type="text" placeholder="Entrez votre Nom" 
            required/>
            </div>
            <div className="inputClient">
            <h4>Prenom du client</h4>
            <input type="text" placeholder="Entrez votre Nom" 
            required/>
            </div>
          </div> <br/>
          <div className="NomPre">
            <div className="inputClient">
            <h4>Adresse du client</h4>
            <input type="text" placeholder="Entrez votre Nom" 
            required/>
            </div>
            <div className="in">
            <h4 >Sexe</h4> 
            <input  type="radio" name="gender" id="dot-1"  
             />
              <label for="dot-1" value="Homme">
            <span >Homme</span>
          </label>
            <input type="radio" name="gender" id="dot-2" 
             />
         
          
           
          <label for="dot-2" value="Femme">
            <span >Femme </span>
          </label>
          
          
            </div>
          </div>

          <br/>


      
        <div className="NomPre">
            <div className="inputClient"> 
            <h4 >Date</h4>
            <input type="date" id="start" name="trip-start" onChange={this.changeDateRendez}
            
       min="2022-01-01" max="2023-12-31"/>

            </div>
            <div className="inputClient">
            <h4 >Agence</h4>
            <select className="selectClient"   
            >
    <option value="0">Selectionner l'agence</option>
    <option value="Agence dely ibrahim">Agence dely ibrahim</option>
    <option value="Agence dar el baida">Agence dar el baida</option>
    <option value="Agence setif">Agence setif </option>
    <option value="Agence Oran">Agence Oran</option>
    <option value="Agence constantine">Agence constantine </option>
    <option value="Agence Blida">Agence Blida</option>
    <option value="Agence Bejaia">Agence Bejaia</option>
           </select>
            </div>
            
         </div>
         <br/>

        <div className="NomPre">
            <div className="inputClient">
            <h4 class="details">Numéro du compte</h4>
            <input type="tel" id="phone" name="phone" placeholder="Format: 01234"
            pattern="[0-9]{5}" 
            required/>
                </div>
                <div className="inputClient"> 
                <h4 class="details">Numéro du Telephone</h4>
            <input type="tel" id="phone" name="phone" placeholder="Format: 01234"
            pattern="[0-9]{5}" 
            required/>
                    </div> 

        </div>
        <br/>
        <div className="NomPre">
            <div className="inputClient">
            <h4 class="details">Nom d'utilisateur</h4>
            <input type="tel" id="phone" name="phone" placeholder="Format: 01234"
            pattern="[0-9]{5}" 
            required/>
                </div>
                <div className="inputClient"> 
                <h4 class="details">Mot de passe </h4>
            <input type="tel" id="phone" name="phone" placeholder="Format: 01234"
            pattern="[0-9]{5}" 
            required/>
                    </div> 

        </div>
           
 
       <br/>
        <div className="NomPre2">
        <div className="idk">
        <h4 >Email</h4>
            <input type="email" id="email" name="email" placeholder="exemple@gmail.com"
            
            required/>
         </div>
        </div>
    </div>
    {/* btn */}
    <br/>
    <div className="Btn-EN">
      <input type="submit" value="Envoyer"/>
     
    </div>
  </form>
</div>
</div>
</div></>
  );
};}

export default FormClient;