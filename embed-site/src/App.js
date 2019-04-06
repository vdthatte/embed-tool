import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";


//https://mattb.omni.co/graphql
//https://48p1r2roz4.sse.codesandbox.io
//LxYe3V85jyae
// https://omni.co/listings/LxYe3V85jyae?metro=san_francisco

const client = new ApolloClient({
  uri:  "https://mattb.omni.co/graphql"
});

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      link: "",
      name: "",
      description: "",
      image: "",
      price: 24,
      code:"",
      style: 1,
      
      codeStyle1: `<!-- Omni code snippet begins here-->
      
<div class="omni-rental-box"><style>.omni-rental-box{ font-family: Arial, Helvetica, sans-serif;margin-top: 2%;padding: 1%;width: 36%;border: none;}.omni-rental-item-name{padding-top: 2%;font-size: 48px;font-weight: 700;color: #000;font-family: Arial, Helvetica, sans-serif;line-height: 1.0em;padding-left: 2%;}.omni-rental-image{height: 300px;width: 400px;border-color: #fff;border-width: 1px;border-style: solid;background-size: cover;border-color: #E8E8E8;border-width: 1px;border-style: solid;border-radius: 10px;background-image: url(${this.image});}.omni-rental-link{text-decoration: none;}.omni-rental-description{font-size: 18px;color: #000;padding-left: 2%;opacity: 0.5;}</style><a class="omni-rental-link" href=${this.link} target="_blank"><div class="omni-rental-image"></div><h1 class="omni-rental-item-name">${this.name}</h1><p class="omni-rental-description">${this.description}</p></a></div>

<!-- Omni code snippet ends here-->
      `,

      codeStyle2: `<!-- Omni code snippet begins here-->

<style>.omni-rental-button{padding-top:1%;padding-bottom:1%;background-color:#F2F4F5;color:white;font-size:1.6vw;width: 250px;border-radius: 8px;border-width: 1px;border-style: solid;border-color: #E8E8E8; color: #000;font-weight: 300;display: inline-block;}.logo{padding-right: 5%;height: 2vw;width: 2vw;vertical-align: bottom;}</style><a class="omni-rental-link" href=${this.link} target="_blank"><button class="omni-rental-button"><img class="logo" src="https://raw.githubusercontent.com/vdthatte/embed-styles/master/logo.png">Rent on Omni</button></a></div>

<!-- Omni code snippet ends here-->
      `,

      codeStyle3: `<!-- Omni code snippet begins here-->

<div class="omni-rental-box"><style>.omni-rental-image{height: 250px;width: 250px;}.omni-rental-item-name{padding-top: 2%;font-size: 2vw;font-weight: 700;color: #000;}.omni-rental-button{ padding-top:4%;padding-bottom:4%;background-color:#E81F24;color: white;font-size:16px;width:80%;border-radius:8px;border-color: transparent;border-style:solid;} .omni-rental-box{ border-width: 1px; border-color: transparent;border-style:solid;width:300px;padding-bottom:2%;top:0;margin-top:5%;margin-left:5%;background-size:cover;border-color:#E8E8E8;border-width: 1px;border-style: solid;border-radius: 10px;} .omni-rental-link{text-decoration: none;}</style><a class="omni-rental-link" href=${this.link} target="_blank"><center><h1 class="omni-rental-item-name">${this.name}</h1></center><img class="omni-rental-image"  src=${this.image}></img><center><button class="omni-rental-button">Rent for ${this.price}/day</button></center></a></div>

<!-- Omni code snippet ends here-->
      `
    }

    this.handleChange = this.handleChange.bind(this);
    this.getURLData = this.getURLData.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  getURLData(id){
    var id_str = '\"'+ id + '\"'

    client.query({
        query: gql`
          {
            listing(id: ${id_str}){ 
              name 
              price_day 
              url 
              description
              images{ 
                url 
              }
            }
          }
        `
    }).then(result => {
        var listing = result.data.listing
        if(listing.images.length > 0){
          this.setState({
            name: listing.name,
            price: listing.price_day,
            image : listing.images[0].url,
            description: listing.description,
            code: this.state.codeStyle1
          })
        }

      })
      .catch(error => console.error(error));
  }

  componentDidMount(){
    if(this.state.link == ""){
      this.getURLData("LAGBURsRR1mi")
    }
  }

  handleFocus(event){
    event.target.select()
  }

  handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
    if(e.target.name == "link"){
      if(e.target.value.split("/")[3] == "listings"){
        //console.log((e.target.value.split("/")[4]).split("?")[0]);

        this.getURLData((e.target.value.split("/")[4]).split("?")[0])
        
      }
    } else if(e.target.name == "style"){
      if(e.target.value == 1){
        this.setState({
          code: this.state.codeStyle1
        })
      } else if(e.target.value == 2){
        this.setState({
          code: this.state.codeStyle2
        })
      } else {
        this.setState({
          code: this.state.codeStyle3
        })
      }
    }
    //this.getURLData()

  }

  render() {


    return (
      <div className="App">
      
      <div className="logoDiv">
        <center>
        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.291 8.8l.005.01C31.471 11.032 32 13.303 32 16c0 8.836-7.163 16-16 16S0 24.836 0 16 7.163 0 16 0c2.896 0 5.097.487 7.425 1.825a1.307 1.307 0 1 1-1.027 2.403c-.001.003.027.01.026.012A13.447 13.447 0 0 0 16 2.612C8.606 2.612 2.612 8.606 2.612 16S8.606 29.388 16 29.388 29.388 23.394 29.388 16c0-2.144-.5-4.153-1.395-5.95l-.007-.015a1.308 1.308 0 0 1 2.26-1.31c.013.026.03.048.045.075zm-6.605-.15c.346.346.313.852.313 1.283v12.785c0 .077-.008.152-.022.225l-.004.028a1.272 1.272 0 0 1-.157.4 1.292 1.292 0 0 1-.148.2c-.015.018-.027.037-.044.054-.016.017-.036.029-.053.044a1.289 1.289 0 0 1-.601.305l-.028.004a1.291 1.291 0 0 1-.226.022h-.001a1.28 1.28 0 0 1-.233-.022l-.016-.003a1.261 1.261 0 0 1-.21-.062l-.034-.012a1.271 1.271 0 0 1-.182-.096c-.016-.01-.032-.018-.047-.029a1.296 1.296 0 0 1-.161-.131c-.008-.008-.016-.012-.024-.02l-11.24-11.24v9.994c0 .707-.577 1.285-1.284 1.285A1.288 1.288 0 0 1 8 22.379V9.281c0-.076.008-.151.021-.224l.005-.028a1.254 1.254 0 0 1 .157-.4 1.233 1.233 0 0 1 .147-.2c.016-.018.028-.037.045-.054.016-.017.036-.029.053-.044a1.353 1.353 0 0 1 .34-.22c.022-.011.046-.02.07-.029a1.29 1.29 0 0 1 .191-.056l.028-.004a1.258 1.258 0 0 1 .46 0l.016.003c.073.014.143.036.21.062l.034.012c.064.027.124.06.182.096l.047.028a1.3 1.3 0 0 1 .161.132c.008.008.016.012.024.02l5.977 5.977 5.701-5.703c.5-.499 1.317-.499 1.817 0zm4.047-3.05a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0zm-6.4 14.133V12.8l-3.2 3.467 3.2 3.466z" fill="#32393D" fill-rule="evenodd"></path>
        </svg>
        </center>
      </div>

        <div>
        <div class="input-form">
          <h2>Paste URL of the product you want to embed below</h2>
            <input class="input-box" name="link" value={this.state.link} placeholder="https://omni.co/listings/LAGBURsRR1mi?metro=san_francisco" onChange={this.handleChange}/>
            <br/><br/>

            <h2>Copy and paste this code into your website</h2>  

            <textarea 
              rows="4" 
              class="code-snippet-box" 
              placeholder="" 
              value={this.state.code}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              autocomplete="off" 
              autocorrect="off" 
              autocapitalize="off" 
              spellcheck="false"
            />
            <br/>

        
            <div className="copyButtonSection">
  
              <CopyToClipboard text={this.state.code}
                onCopy={() => this.setState({copied: true})}>
                {
                  this.state.copied ? <button className="copyButton"><span style={{color: 'red'}}>Copied.</span></button> : <button className="copyButton">Copy Code</button>
                }
              </CopyToClipboard>

            </div>

        </div>

          
          <center>
            <div class="change-style-buttons">
              <button class="style-button" onClick={this.handleChange} name="style" value={1}>In-line</button>
              <button class="style-button" onClick={this.handleChange} name="style" value={2}>Button</button>
              <button class="style-button" onClick={this.handleChange} name="style" value={3}>Card</button>
            </div>
          </center>

          <div class="right-section">

  

          {
            (this.state.style == 1) ? (
                <div class="omni-rental-box-1">
                  <a class="omni-rental-link-1" href={this.state.link} target="_blank">
                    <div class="omni-rental-image-1" style={{backgroundImage: `url(${this.state.image})`}}></div>
                    <h1 class="omni-rental-item-name-1">{this.state.name}</h1>
                    <p class="omni-rental-description-1">{this.state.description}</p>
                  </a>
                </div>
            ) : (null)
          }


          {
            (this.state.style == 2) ? (
                <div class="omni-rental-box-2">
                  <center>
                    <a class="omni-rental-link" href={this.state.link} target="_blank"><button class="omni-rental-button"><img class="logo" src="https://raw.githubusercontent.com/vdthatte/embed-styles/master/logo.png" />Rent on Omni</button></a>
                  </center>
                </div>
            ) : (null)
          }

          {
            (this.state.style == 3) ? (
                <div class="omni-rental-box-3">
                  <a class="omni-rental-link" href={this.state.link} target="_blank">
                    <center><h1 class="omni-rental-item-name-3">{this.state.name}</h1></center>
                    <img class="omni-rental-image-3"  src={this.state.image}></img>
                    <center><button class="omni-rental-button-3">Rent for ${this.state.price}/day</button></center>
                  </a>
                </div>
            ) : (null)
          }

          </div>
        </div>
      </div>
    );
  }
}

export default App;
