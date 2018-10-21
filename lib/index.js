/**
 * @license MIT
 * @author Baptiste Crespy <baptiste.crespy@gmail.com>
 * 
 * This class describes how should an HUD element be implemented show that it 
 * can be used within the Creative Environment @Creenv. An HUDElement can be 
 * added to the @creenv/hud, and then be managed through this HUD
 **/

/**
 * @abstract
 */
class HUDElement {
  /**
   * Represents an HUDelement. An HUDelement can be added to the HUD, but can 
   * only be inherited. Such a class must implement the show(toggle: boolean) 
   * method, an of course call super.show(toggle);
   * 
   * @param {?boolean} visible if the HUD element is visible or hidden (=true) 
   */
  constructor (visible = true) {
    if (this.constructor === HUDElement) {
      console.error("HUDelement cannot be instanciated and must be inherited ! @abstract pattern");
    }
    this.visible = visible;
  }

  /**
   * Show or Hide the HUD element 
   * 
   * @param {?boolean} toggle weither the element is displayed or not, if undefined,
   * the HUDelement will toggle to the opposite state 
   * 
   * @abstract
   */
  show (toggle) {
    if (toggle === undefined) toggle = !this.visible;
    this.visible = toggle;
  }
}


export default HUDElement;