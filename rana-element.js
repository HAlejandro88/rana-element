import { html, css, LitElement } from "lit-element";

class RanaElement extends LitElement {
  static get properties() {
    return {
      line: {type: Array },
      toMove :{type: Number}
    };
  }
set toMove(val){
    let oldVal = this._toMove;
    this._toMove = ()=>{
      let salto = this.line.length-1;
      let position = this.line.indexOf('frog');
      console.log(salto)
      for(let i=0; i< this.toMove; i++){

        this.line[position]=null;
        (position < salto) ? position++ :position= 0;
      }
      this.line[position]="frog";
      console.log(this.line);
      this.set("indexfrog",position);
    }
    this.requestUpdate('toMove',oldVal)
}
get toMove(){return this._toMove}
  constructor() {
    super();
    this.line = ['frog',null,null,null,null];
    this.toMove = 2;
  }

  static get styles() {
    return css`
    .container{
       width:100%;
       height:100vh;
     }
     .box{
       height:50px;
       width:50px;
       border:1px solid black;
     }
    `;
  }

  render() {
    return html`
      <div class="container">
        ${this.line.map(box=>html`<div class="box">${box}</div>`)}      
      </div>
      <div>
        <button @click="move">hola</button> 
      </div>
     
    `;
  }

}

window.customElements.define("rana-element", RanaElement);
