import PageManager from '../page-manager';
import $ from 'jquery';

export default class Custom extends PageManager {

    onReady() {

                    /*input validation function */
                    function validate(e) {
                      const regex = /[A-Za-z ,.]/;
                      const chars = e.target.value.split('');
                      const char = chars.pop();
                      if (!regex.test(char)) {
                        e.target.value = chars.join('');
                        alert('unknown or restricted symbol');
                      }
                      if(chars.length > 199 ){
                        alert('too much symbols. Please, make your text shorter');
                      }
                    }
                    /* Event listener input Congratulatory inscription */
                    document.querySelector('#attribute_text_156').addEventListener('input', validate);


                    /* show input for a gift  */
                    function yesnoCheck() {
                        if (document.getElementById('yesCheck').checked) {
                            document.getElementById('ifYes').style.display = 'block';
                        }
                        else document.getElementById('ifYes').style.display = 'none';
                    }
                    /* Event listener input */
                    /* show input for a gift */
                    document.querySelector('#yesCheck').addEventListener('change', yesnoCheck);
                    /**/




                    /**/
                    function congratulationInscription() {
                        if (document.getElementById('email').checked) {
                            document.getElementById('congratulationInscriptionIfYes').style.display = 'block';
                        }
                        else document.getElementById('congratulationInscriptionIfYes').style.display = 'none';
                    }
                    /* Event listener input */
                    /* Send a congratulation inscription via email */
                    document.querySelector('#email').addEventListener('change', congratulationInscription);

                    /* Event listener input */
                    /* Print it on a gift card */
                    document.querySelector('#gift').addEventListener('change', congratulationInscription);
                    /**/


                    document.querySelector('#сongratulatory_inscription').addEventListener('input', function() {
                        console.log(document.querySelector('#сongratulatory_inscription').value);
                    });



    }

}