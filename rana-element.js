import { html, css, LitElement } from "lit-element";

class RanaElement extends LitElement {
  static get properties() {
    return {
      line: {type: Array },
      toMove :{type: Number}
    };
  }


  constructor() {
    super();
    this.line = ['frog',null,null,null,null];
    this.toMove = 0;
    this.move()
  }

  static get styles() {
    return css`
    .container{
       width:100%;
       height:100vh;
       display: flex;
     }
     .box{
       height:50px;
       width:50px;
       border:1px solid black;
     }
     #movimiento{
       width:50px;m   
       height:50px;
     }
    `;
  }

  render() {
    return html`
      <div class="container">
        ${this.line.map(box=>html`<div class="box">${box}</div>`)} 
        <input type="text" @keyup="${this.bindNumber}" id="movimiento">    
      </div>
      
      
      
     
    `;
  }

  bindNumber(event){
    let number=event.target.value;
    console.log(number );
    
    this.toMove=number;
    this.move();
  }

  move(){
    let salto = this.line.length-1;
    let position = this.line.indexOf('frog');
    console.log(salto)
    for(let i=0; i< this.toMove; i++){

      this.line[position]=null;
      (position < salto) ? position++ :position= 0;
    }
    this.line[position]="frog";
    console.log(this.line);
    
  }
  

}

window.customElements.define("rana-element", RanaElement);
